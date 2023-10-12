import type { FunctionComponent, ComponentProps } from 'react';
import React, { memo } from 'react';
import { styled } from '@storybook/theming';
import type { IconKey } from './icons';
import { icons } from './icons';

const Svg = styled.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;

  path {
    fill: currentColor;
  }
`;

export interface IconsProps extends ComponentProps<typeof Svg> {
  icon: IconType;
  useSymbol?: boolean;
}

export const Icons: FunctionComponent<IconsProps> = ({ icon, useSymbol, ...props }: IconsProps) => {
  return (
    <Svg viewBox="0 0 14 14" width="14px" height="14px" {...props}>
      {useSymbol ? <use xlinkHref={`#icon--${icon}`} /> : icons[icon]}
    </Svg>
  );
};

export type IconType = keyof typeof icons;

export interface SymbolsProps extends ComponentProps<typeof Svg> {
  icons?: IconKey[];
}

export const Symbols = memo<SymbolsProps>(function Symbols({ icons: keys = Object.keys(icons) }) {
  return (
    <Svg
      viewBox="0 0 14 14"
      style={{ position: 'absolute', width: 0, height: 0 }}
      data-chromatic="ignore"
    >
      {keys.map((key: IconKey) => (
        <symbol id={`icon--${key}`} key={key}>
          {icons[key]}
        </symbol>
      ))}
    </Svg>
  );
});
