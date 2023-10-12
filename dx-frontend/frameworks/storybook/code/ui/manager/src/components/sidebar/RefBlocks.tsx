import { global } from '@storybook/global';
import type { FC } from 'react';
import React, { useState, useCallback, Fragment } from 'react';

import { Icons, WithTooltip, Spaced, Button, Link, ErrorFormatter } from '@storybook/components';
import { logger } from '@storybook/client-logger';
import { styled } from '@storybook/theming';

import { Loader, Contained } from './Loader';

const { window: globalWindow } = global;

const TextStyle = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '20px',
  margin: 0,
}));
const Text = styled.div(({ theme }) => ({
  fontSize: theme.typography.size.s2 - 1,
  lineHeight: '20px',
  margin: 0,

  code: {
    fontSize: theme.typography.size.s1,
  },

  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8,
  },
}));

const ErrorDisplay = styled.pre(
  {
    width: 420,
    boxSizing: 'border-box',
    borderRadius: 8,
    overflow: 'auto',
    whiteSpace: 'pre',
  },
  ({ theme }) => ({
    color: theme.color.dark,
  })
);

export const AuthBlock: FC<{ loginUrl: string; id: string }> = ({ loginUrl, id }) => {
  const [isAuthAttempted, setAuthAttempted] = useState(false);

  const refresh = useCallback(() => {
    globalWindow.document.location.reload();
  }, []);

  const open = useCallback((e) => {
    e.preventDefault();
    const childWindow = globalWindow.open(loginUrl, `storybook_auth_${id}`, 'resizable,scrollbars');

    // poll for window to close
    const timer = setInterval(() => {
      if (!childWindow) {
        logger.error('unable to access loginUrl window');
        clearInterval(timer);
      } else if (childWindow.closed) {
        clearInterval(timer);
        setAuthAttempted(true);
      }
    }, 1000);
  }, []);

  return (
    <Contained>
      <Spaced>
        {isAuthAttempted ? (
          <Fragment>
            <Text>
              Authentication on <strong>{loginUrl}</strong> concluded. Refresh the page to fetch
              this Storybook.
            </Text>
            <div>
              <Button small gray onClick={refresh}>
                <Icons icon="sync" />
                Refresh now
              </Button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <Text>Sign in to browse this Storybook.</Text>
            <div>
              <Button small gray onClick={open}>
                <Icons icon="lock" />
                Sign in
              </Button>
            </div>
          </Fragment>
        )}
      </Spaced>
    </Contained>
  );
};

export const ErrorBlock: FC<{ error: Error }> = ({ error }) => (
  <Contained>
    <Spaced>
      <TextStyle>
        Oh no! Something went wrong loading this Storybook.
        <br />
        <WithTooltip
          tooltip={
            <ErrorDisplay>
              <ErrorFormatter error={error} />
            </ErrorDisplay>
          }
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link isButton>
            View error <Icons icon="arrowdown" />
          </Link>
        </WithTooltip>{' '}
        <Link withArrow href="https://storybook.js.org/docs" cancel={false} target="_blank">
          View docs
        </Link>
      </TextStyle>
    </Spaced>
  </Contained>
);

const FlexSpaced = styled(Spaced)({
  display: 'flex',
});
const WideSpaced = styled(Spaced)({
  flex: 1,
});

export const EmptyBlock: FC<any> = ({ isMain }) => (
  <Contained>
    <FlexSpaced col={1}>
      <WideSpaced>
        <Text>
          {isMain ? (
            <>
              Oh no! Your Storybook is empty. Possible reasons why:
              <ul>
                <li>
                  The glob specified in <code>main.js</code> isn't correct.
                </li>
                <li>No stories are defined in your story files.</li>
                <li>You're using filter-functions, and all stories are filtered away.</li>
              </ul>{' '}
            </>
          ) : (
            <>Yikes! Something went wrong loading these stories.</>
          )}
        </Text>
      </WideSpaced>
    </FlexSpaced>
  </Contained>
);

export const LoaderBlock: FC<{ isMain: boolean }> = ({ isMain }) => (
  <Contained>
    <Loader size={isMain ? 17 : 5} />
  </Contained>
);
