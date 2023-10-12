import type { FC } from 'react';
import React from 'react';
import { TabsState } from '@storybook/components';

import type { ArgsTableProps, SortType } from './ArgsTable';
// eslint-disable-next-line import/no-cycle
import { ArgsTable } from './ArgsTable';

export interface TabbedArgsTableProps {
  children?: React.ReactNode;
  tabs: Record<string, ArgsTableProps>;
  sort?: SortType;
}

export const TabbedArgsTable: FC<TabbedArgsTableProps> = ({ tabs, ...props }) => {
  const entries = Object.entries(tabs);

  if (entries.length === 1) {
    return <ArgsTable {...entries[0][1]} {...props} />;
  }

  return (
    <TabsState>
      {entries.map((entry) => {
        const [label, table] = entry;
        const id = `prop_table_div_${label}`;
        const Component = 'div' as unknown as React.ElementType<
          Omit<JSX.IntrinsicElements['div'], 'children'> & {
            children: ({ active }: { active: boolean }) => React.ReactNode;
          }
        >;
        return (
          <Component key={id} id={id} title={label}>
            {({ active }) =>
              active ? <ArgsTable key={`prop_table_${label}`} {...table} {...props} /> : null
            }
          </Component>
        );
      })}
    </TabsState>
  );
};
