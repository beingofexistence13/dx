import type { Globals } from '@storybook/csf';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import React from 'react';
import type { RouteParams } from './types';

type PageRouterProviderProps = {
  action: (name: string) => (...args: any[]) => void;
  routeParams: RouteParams;
  globals: Globals;
};

const PageRouterProvider: React.FC<PageRouterProviderProps> = ({
  children,
  action,
  routeParams,
  globals,
}) => (
  <RouterContext.Provider
    value={{
      push(...args) {
        action('nextRouter.push')(...args);
        return Promise.resolve(true);
      },
      replace(...args) {
        action('nextRouter.replace')(...args);
        return Promise.resolve(true);
      },
      reload(...args) {
        action('nextRouter.reload')(...args);
      },
      back(...args) {
        action('nextRouter.back')(...args);
      },
      forward() {
        action('nextRouter.forward')();
      },
      prefetch(...args) {
        action('nextRouter.prefetch')(...args);
        return Promise.resolve();
      },
      beforePopState(...args) {
        action('nextRouter.beforePopState')(...args);
      },
      events: {
        on(...args) {
          action('nextRouter.events.on')(...args);
        },
        off(...args) {
          action('nextRouter.events.off')(...args);
        },
        emit(...args) {
          action('nextRouter.events.emit')(...args);
        },
      },
      locale: globals?.locale,
      route: '/',
      asPath: '/',
      basePath: '/',
      isFallback: false,
      isLocaleDomain: false,
      isReady: true,
      isPreview: false,
      ...routeParams,
    }}
  >
    {children}
  </RouterContext.Provider>
);

export default PageRouterProvider;
