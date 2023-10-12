import React from 'react';
import type {
  LayoutRouterContext as TLayoutRouterContext,
  AppRouterContext as TAppRouterContext,
  GlobalLayoutRouterContext as TGlobalLayoutRouterContext,
} from 'next/dist/shared/lib/app-router-context';
import type {
  PathnameContext as TPathnameContext,
  SearchParamsContext as TSearchParamsContext,
} from 'next/dist/shared/lib/hooks-client-context';
import type { FlightRouterState } from 'next/dist/server/app-render/types';
import type { RouteParams } from './types';

/**
 * Normally dynamic imports are necessary because otherwise
 * older versions of Next.js will throw an error
 * because AppRouterProviders only exists in Next.js > v13
 * Using React.lazy though is currently not supported in SB decorators
 * therefore using the try/catch workaround
 */
let AppRouterContext: typeof TAppRouterContext;
let LayoutRouterContext: typeof TLayoutRouterContext;
let PathnameContext: typeof TPathnameContext;
let SearchParamsContext: typeof TSearchParamsContext;
let GlobalLayoutRouterContext: typeof TGlobalLayoutRouterContext;

try {
  AppRouterContext = require('next/dist/shared/lib/app-router-context').AppRouterContext;
  LayoutRouterContext = require('next/dist/shared/lib/app-router-context').LayoutRouterContext;
  PathnameContext = require('next/dist/shared/lib/hooks-client-context').PathnameContext;
  SearchParamsContext = require('next/dist/shared/lib/hooks-client-context').SearchParamsContext;
  GlobalLayoutRouterContext =
    require('next/dist/shared/lib/app-router-context').GlobalLayoutRouterContext;
} catch {
  AppRouterContext = React.Fragment as any;
  LayoutRouterContext = React.Fragment as any;
  PathnameContext = React.Fragment as any;
  SearchParamsContext = React.Fragment as any;
  GlobalLayoutRouterContext = React.Fragment as any;
}

type AppRouterProviderProps = {
  action: (name: string) => (...args: any[]) => void;
  routeParams: RouteParams;
};

const getParallelRoutes = (segmentsList: Array<string>): FlightRouterState => {
  const segment = segmentsList.shift();

  if (segment) {
    return [segment, { children: getParallelRoutes(segmentsList) }];
  }

  return [] as any;
};

const AppRouterProvider: React.FC<AppRouterProviderProps> = ({ children, action, routeParams }) => {
  const { pathname, query, segments = [], ...restRouteParams } = routeParams;

  const tree: FlightRouterState = [pathname, { children: getParallelRoutes([...segments]) }];

  // https://github.com/vercel/next.js/blob/canary/packages/next/src/client/components/app-router.tsx#L436
  return (
    <PathnameContext.Provider value={pathname}>
      <SearchParamsContext.Provider value={new URLSearchParams(query)}>
        <GlobalLayoutRouterContext.Provider
          value={{
            changeByServerResponse() {
              // NOOP
            },
            buildId: 'storybook',
            tree,
            focusAndScrollRef: {
              apply: false,
              hashFragment: null,
              segmentPaths: [tree],
              onlyHashChange: false,
            },
            nextUrl: pathname,
          }}
        >
          <AppRouterContext.Provider
            value={{
              push(...args) {
                action('nextNavigation.push')(...args);
              },
              replace(...args) {
                action('nextNavigation.replace')(...args);
              },
              forward(...args) {
                action('nextNavigation.forward')(...args);
              },
              back(...args) {
                action('nextNavigation.back')(...args);
              },
              prefetch(...args) {
                action('nextNavigation.prefetch')(...args);
              },
              refresh: () => {
                action('nextNavigation.refresh')();
              },
              ...restRouteParams,
            }}
          >
            <LayoutRouterContext.Provider
              value={{
                childNodes: new Map(),
                tree,
                url: pathname,
              }}
            >
              {children}
            </LayoutRouterContext.Provider>
          </AppRouterContext.Provider>
        </GlobalLayoutRouterContext.Provider>
      </SearchParamsContext.Provider>
    </PathnameContext.Provider>
  );
};

export default AppRouterProvider;
