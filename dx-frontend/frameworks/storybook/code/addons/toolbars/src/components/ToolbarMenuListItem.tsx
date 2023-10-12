import React from 'react';
import type { TooltipLinkListLink } from '@storybook/components';
import { Icons } from '@storybook/components';
import type { ToolbarItem } from '../types';

export type ToolbarMenuListItemProps = {
  currentValue: string;
  onClick: () => void;
} & ToolbarItem;

export const ToolbarMenuListItem = ({
  left,
  right,
  title,
  value,
  icon,
  hideIcon,
  onClick,
  currentValue,
}: ToolbarMenuListItemProps) => {
  const Icon = icon && <Icons style={{ opacity: 1 }} icon={icon} />;

  const Item: TooltipLinkListLink = {
    id: value ?? '_reset',
    active: currentValue === value,
    right,
    title,
    left,
    onClick,
  };

  if (icon && !hideIcon) {
    Item.left = Icon;
  }

  return Item;
};
