import { styled } from '@storybook/theming';
import type { FC, ReactChild, ReactElement, ReactNode } from 'react';
import React, { Children } from 'react';
import type { Addon_RenderOptions } from '@storybook/types';
import type { TabsProps } from './tabs';

export interface VisuallyHiddenProps {
  active?: boolean;
}

export const VisuallyHidden = styled.div<VisuallyHiddenProps>(({ active }) =>
  active ? { display: 'block' } : { display: 'none' }
);

export const childrenToList = (children: TabsProps['children']) =>
  Children.toArray(children).map(
    ({
      props: { title, id, color, children: childrenOfChild },
    }: ReactElement<{
      children: FC<Addon_RenderOptions> | ReactChild | null;
      title: ReactChild | null | FC;
      id: string;
      color?: string;
    }>) => {
      const content: FC<Addon_RenderOptions> | ReactNode = Array.isArray(childrenOfChild)
        ? childrenOfChild[0]
        : childrenOfChild;

      const render: FC<Addon_RenderOptions> = (
        typeof content === 'function'
          ? content
          : ({ active }) => (
              <VisuallyHidden active={active} role="tabpanel">
                {content}
              </VisuallyHidden>
            )
      ) as FC<Addon_RenderOptions>;
      return {
        title,
        id,
        ...(color ? { color } : {}),
        render,
      };
    }
  );

export type ChildrenList = ReturnType<typeof childrenToList>;
export type ChildrenListComplete = Array<
  ReturnType<typeof childrenToList>[0] & {
    active: boolean;
  }
>;
