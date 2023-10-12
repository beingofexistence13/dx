/* eslint-disable no-nested-ternary */
import type { FC } from 'react';
import React, { useState } from 'react';
import { styled } from '@storybook/theming';
import type { State } from '@storybook/manager-api';

import { Button as BaseButton, Icons, Link, StorybookIcon } from '@storybook/components';

const Header = styled.header(({ theme }) => ({
  marginBottom: 32,
  fontSize: theme.typography.size.l2,
  color: theme.base === 'light' ? theme.color.darkest : theme.color.lightest,
  fontWeight: theme.typography.weight.bold,
  alignItems: 'center',
  display: 'flex',

  '> svg': {
    height: 48,
    width: 'auto',
    marginRight: 8,
  },
}));

const Container = styled.div({
  display: `flex`,
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100% - 40px)',
  flexDirection: 'column',
});

const UpgradeBlock = styled.div(({ theme }) => {
  return {
    border: '1px solid',
    borderRadius: 5,
    padding: 20,
    margin: 20,
    marginTop: 0,
    maxWidth: 400,
    borderColor: theme.appBorderColor,
    fontSize: theme.typography.size.s2,
  };
});

const Code = styled.pre(({ theme }) => ({
  background: theme.base === 'light' ? 'rgba(0, 0, 0, 0.05)' : theme.appBorderColor,
  fontSize: theme.typography.size.s2 - 1,
  margin: '4px 0 16px',
}));

const Footer = styled.div(({ theme }) => ({
  marginBottom: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: theme.base === 'light' ? theme.color.dark : theme.color.lightest,
  fontWeight: theme.typography.weight.regular,
  fontSize: theme.typography.size.s2,
}));

const SquareButton = styled(BaseButton)(({ theme }) => ({
  '&&': {
    borderRadius: 4,
    fontSize: '13px',
    lineHeight: '14px',
    color: theme.base === 'light' ? theme.color.darker : theme.color.lightest,
    padding: '9px 12px',
    svg: {
      marginRight: 6,
    },
  },
}));

const TabButton = styled(BaseButton)<{ active: boolean }>(({ theme, active }) => ({
  '&&': {
    padding: 2,
    paddingRight: 8,
    margin: 0,
    color: active
      ? theme.color.secondary
      : theme.base === 'light'
      ? theme.color.dark
      : theme.color.lightest,
  },
}));

const StyledLink = styled(Link as any)(({ theme }) => ({
  '&&': {
    fontWeight: theme.typography.weight.bold,
    color: theme.base === 'light' ? theme.color.dark : theme.color.light,
  },
  '&:hover': {
    color: theme.base === 'light' ? theme.color.darkest : theme.color.lightest,
  },
}));

const AboutScreen: FC<{
  current: State['versions']['current'];
  onNavigateToWhatsNew?: () => void;
}> = ({ current, onNavigateToWhatsNew }) => {
  const [activeTab, setActiveTab] = useState<'npm' | 'pnpm'>('npm');
  return (
    <Container>
      <div style={{ flex: '1' }} />
      <Header>
        <StorybookIcon /> Storybook
      </Header>
      <UpgradeBlock>
        <strong>You are on Storybook {current.version}</strong>
        <p>Run the following script to check for updates and upgrade to the latest version.</p>
        <div>
          <TabButton active={activeTab === 'npm'} onClick={() => setActiveTab('npm')}>
            npm
          </TabButton>
          <TabButton active={activeTab === 'pnpm'} onClick={() => setActiveTab('pnpm')}>
            pnpm
          </TabButton>
        </div>

        <Code>
          {activeTab === 'npm'
            ? 'npx storybook@latest upgrade'
            : 'pnpm dlx storybook@latest upgrade'}
        </Code>
        {onNavigateToWhatsNew && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <Link onClick={onNavigateToWhatsNew}>See what's new in Storybook</Link>
        )}
      </UpgradeBlock>

      <div style={{ flex: '1.2' }} />
      <Footer>
        <div style={{ marginBottom: 12 }}>
          <SquareButton
            isLink
            outline
            small
            href="https://github.com/storybookjs/storybook"
            style={{ marginRight: 12 }}
          >
            <Icons icon="github" style={{ display: 'inline', marginRight: 5 }} />
            GitHub
          </SquareButton>

          <SquareButton isLink outline small href="https://storybook.js.org/docs">
            <Icons icon="document" style={{ display: 'inline', marginRight: 5 }} />
            Documentation
          </SquareButton>
        </div>
        <div>
          Open source software maintained by{' '}
          <StyledLink href="https://www.chromatic.com/">Chromatic</StyledLink> and the{' '}
          <StyledLink href="https://github.com/storybookjs/storybook/graphs/contributors">
            Storybook Community
          </StyledLink>
        </div>
      </Footer>
    </Container>
  );
};

export { AboutScreen };
