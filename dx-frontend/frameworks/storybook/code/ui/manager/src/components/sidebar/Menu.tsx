import type { ComponentProps, FC } from 'react';
import React, { useMemo, useState } from 'react';

import { styled } from '@storybook/theming';
import { transparentize } from 'polished';
import type { Button, TooltipLinkListLink } from '@storybook/components';
import { WithTooltip, TooltipLinkList, Icons, IconButton } from '@storybook/components';

export type MenuList = ComponentProps<typeof TooltipLinkList>['links'];

const sharedStyles = {
  height: 10,
  width: 10,
  marginLeft: -5,
  marginRight: -5,
  display: 'block',
};

const Icon = styled(Icons)(sharedStyles, ({ theme }) => ({
  color: theme.color.secondary,
}));

export const SidebarIconButton: FC<
  ComponentProps<typeof Button> & { highlighted: boolean; active: boolean }
> = styled(IconButton)<
  ComponentProps<typeof Button> & {
    highlighted: boolean;
    active: boolean;
  }
>(({ highlighted, active, theme }) => ({
  position: 'relative',
  overflow: 'visible',
  color: theme.textMutedColor,
  marginTop: 0,
  zIndex: 1,

  ...(highlighted && {
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: '50%',
      background: theme.background.app,
      border: `1px solid ${theme.background.app}`,
      boxShadow: `0 0 0 2px ${theme.background.app}`,
    },
    '&:after': {
      background: theme.color.positive,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      boxShadow: `0 0 0 2px ${theme.background.app}`,
    },

    '&:hover:after, &:focus-visible:after': {
      boxShadow: `0 0 0 2px ${transparentize(0.88, theme.color.secondary)}`,
    },
  }),
  ...(active && {
    color: theme.color.secondary,
  }),
}));

const Img = styled.img(sharedStyles);
const Placeholder = styled.div(sharedStyles);

export interface ListItemIconProps {
  icon?: ComponentProps<typeof Icons>['icon'];
  imgSrc?: string;
}

/**
 * @deprecated Please use `Icons` from `@storybook/components` instead
 * Component will be removed in SB 8.0
 */
export const MenuItemIcon = ({ icon, imgSrc }: ListItemIconProps) => {
  if (icon) {
    return <Icon icon={icon} />;
  }
  if (imgSrc) {
    return <Img src={imgSrc} alt="image" />;
  }
  return <Placeholder />;
};

type ClickHandler = TooltipLinkListLink['onClick'];

const SidebarMenuList: FC<{
  menu: MenuList;
  onHide: () => void;
}> = ({ menu, onHide }) => {
  const links = useMemo(() => {
    return menu.map(({ onClick, ...rest }) => ({
      ...rest,
      onClick: ((event, item) => {
        if (onClick) {
          onClick(event, item);
        }
        onHide();
      }) as ClickHandler,
    }));
  }, [menu]);
  return <TooltipLinkList links={links} />;
};

export const SidebarMenu: FC<{
  menu: MenuList;
  isHighlighted?: boolean;
}> = ({ menu, isHighlighted }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  return (
    <WithTooltip
      placement="top"
      closeOnOutsideClick
      tooltip={({ onHide }) => <SidebarMenuList onHide={onHide} menu={menu} />}
      onVisibleChange={setIsTooltipVisible}
    >
      <SidebarIconButton
        title="Shortcuts"
        aria-label="Shortcuts"
        highlighted={isHighlighted}
        active={isTooltipVisible}
      >
        <Icons icon="cog" />
      </SidebarIconButton>
    </WithTooltip>
  );
};

export const ToolbarMenu: FC<{
  menu: MenuList;
}> = ({ menu }) => {
  return (
    <WithTooltip
      placement="bottom"
      closeOnOutsideClick
      modifiers={[
        {
          name: 'flip',
          options: {
            allowedAutoPlacements: [],
          },
        },
      ]}
      tooltip={({ onHide }) => <SidebarMenuList onHide={onHide} menu={menu} />}
    >
      <IconButton title="Shortcuts" aria-label="Shortcuts">
        <Icons icon="menu" />
      </IconButton>
    </WithTooltip>
  );
};
