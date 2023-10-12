import type { FC } from 'react';
import React, { Fragment } from 'react';
import type { Addon_WrapperType } from '@storybook/types';
import { Addon_TypesEnum } from '@storybook/types';
import type { ApplyWrappersProps } from './utils/types';
import { IframeWrapper } from './utils/components';

export const ApplyWrappers: FC<ApplyWrappersProps> = ({
  wrappers,
  id,
  storyId,
  active,
  children,
}) => {
  return (
    <Fragment>
      {wrappers.reduceRight(
        (acc, wrapper, index) => (
          <wrapper.render {...{ index, children: acc, id, storyId, active }} />
        ),
        children
      )}
    </Fragment>
  );
};

export const defaultWrappers: Addon_WrapperType[] = [
  {
    id: 'iframe-wrapper',
    type: Addon_TypesEnum.PREVIEW,
    render: (p) => (
      <IframeWrapper id="storybook-preview-wrapper" hidden={!p.active}>
        {p.children}
      </IframeWrapper>
    ),
  },
];
