import React from 'react';
import { Icons } from '@storybook/components';
import type { ReactElement } from 'react';
import type { API_HashEntry, API_StatusState, API_StatusValue } from '@storybook/types';

import { styled } from '@storybook/theming';
// eslint-disable-next-line import/no-cycle
import { getDescendantIds } from './tree';

const SmallIcons = styled(Icons)({
  // specificity hack
  '&&&': {
    width: 6,
    height: 6,
  },
});

const LoadingIcons = styled(SmallIcons)(({ theme: { animation, color, base } }) => ({
  // specificity hack
  animation: `${animation.glow} 1.5s ease-in-out infinite`,
  color: base === 'light' ? color.mediumdark : color.darker,
}));

export const statusPriority: API_StatusValue[] = ['unknown', 'pending', 'success', 'warn', 'error'];
export const statusMapping: Record<API_StatusValue, [ReactElement | null, string | null]> = {
  unknown: [null, null],
  pending: [<LoadingIcons key="icon" icon="circle" />, 'currentColor'],
  success: [<SmallIcons key="icon" icon="circle" style={{ color: 'green' }} />, 'currentColor'],
  warn: [<SmallIcons key="icon" icon="circle" style={{ color: 'orange' }} />, '#A15C20'],
  error: [<SmallIcons key="icon" icon="circle" style={{ color: 'red' }} />, 'brown'],
};

export const getHighestStatus = (statuses: API_StatusValue[]): API_StatusValue => {
  return statusPriority.reduce(
    (acc, status) => (statuses.includes(status) ? status : acc),
    'unknown'
  );
};

export function getGroupStatus(
  collapsedData: {
    [x: string]: Partial<API_HashEntry>;
  },
  status: API_StatusState
): Record<string, API_StatusValue> {
  return Object.values(collapsedData).reduce<Record<string, API_StatusValue>>((acc, item) => {
    if (item.type === 'group' || item.type === 'component') {
      const leafs = getDescendantIds(collapsedData as any, item.id, false)
        .map((id) => collapsedData[id])
        .filter((i) => i.type === 'story');

      const combinedStatus = getHighestStatus(
        leafs.flatMap((story) => Object.values(status?.[story.id] || {})).map((s) => s.status)
      );

      if (combinedStatus) {
        acc[item.id] = combinedStatus;
      }
    }
    return acc;
  }, {});
}
