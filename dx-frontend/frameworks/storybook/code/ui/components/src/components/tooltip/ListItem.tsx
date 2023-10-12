import type { FC, ReactNode, ComponentProps, ReactElement } from 'react';
import React from 'react';
import { styled } from '@storybook/theming';
import memoize from 'memoizerific';
import { transparentize } from 'polished';
import { Icons } from '../icon/icon';
import { icons } from '../icon/icons';

export interface TitleProps {
  children?: ReactNode;
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}
const Title = styled(({ active, loading, disabled, ...rest }: TitleProps) => <span {...rest} />)<{
  active: boolean;
  loading: boolean;
  disabled: boolean;
}>(
  ({ theme }) => ({
    color: theme.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: theme.typography.weight.regular,
  }),
  ({ active, theme }) =>
    active
      ? {
          color: theme.color.secondary,
          fontWeight: theme.typography.weight.bold,
        }
      : {},
  ({ loading, theme }) =>
    loading
      ? {
          display: 'inline-block',
          flex: 'none',
          ...theme.animation.inlineGlow,
        }
      : {},
  ({ disabled, theme }) =>
    disabled
      ? {
          color: transparentize(0.7, theme.color.defaultText),
        }
      : {}
);

export interface RightProps {
  active?: boolean;
}

const Right = styled.span<RightProps>({
  display: 'flex',
  '& svg': {
    height: 12,
    width: 12,
    margin: '3px 0',
    verticalAlign: 'top',
  },
  '& path': {
    fill: 'inherit',
  },
});

const Center = styled.span<{ isIndented: boolean }>(
  {
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ isIndented }) => (isIndented ? { marginLeft: 24 } : {})
);

export interface CenterTextProps {
  active?: boolean;
  disabled?: boolean;
}

const CenterText = styled.span<CenterTextProps>(
  ({ theme }) => ({
    fontSize: '11px',
    lineHeight: '14px',
  }),
  ({ active, theme }) =>
    active
      ? {
          color: theme.color.secondary,
        }
      : {},
  ({ theme, disabled }) =>
    disabled
      ? {
          color: theme.textMutedColor,
        }
      : {}
);

export interface LeftProps {
  active?: boolean;
}

const Left = styled.span<LeftProps>(
  ({ active, theme }) =>
    active
      ? {
          '& svg': {
            opacity: 1,
          },
          '& svg path:not([fill])': {
            fill: theme.color.secondary,
          },
        }
      : {},
  () => ({
    display: 'flex',
    maxWidth: 14,
  })
);

export interface ItemProps {
  disabled?: boolean;
}

const Item = styled.a<ItemProps>(
  ({ theme }) => ({
    fontSize: theme.typography.size.s1,
    transition: 'all 150ms ease-out',
    color: theme.color.dark,
    textDecoration: 'none',
    cursor: 'pointer',
    justifyContent: 'space-between',

    lineHeight: '18px',
    padding: '7px 10px',
    display: 'flex',
    alignItems: 'center',

    '& > * + *': {
      paddingLeft: 10,
    },

    '&:hover': {
      background: theme.background.hoverable,
    },
    '&:hover svg': {
      opacity: 1,
    },
  }),
  ({ disabled }) =>
    disabled
      ? {
          cursor: 'not-allowed',
        }
      : {}
);

const getItemProps = memoize(100)((onClick, href, LinkWrapper) => {
  const result = {};

  if (onClick) {
    Object.assign(result, {
      onClick,
    });
  }
  if (href) {
    Object.assign(result, {
      href,
    });
  }
  if (LinkWrapper && href) {
    Object.assign(result, {
      to: href,
      as: LinkWrapper,
    });
  }
  return result;
});

export type LinkWrapperType = FC<any>;

export interface ListItemProps extends Omit<ComponentProps<typeof Item>, 'href' | 'title'> {
  loading?: boolean;
  /**
   * @deprecated This property will be removed in SB 8.0
   * Use `icon` property instead.
   */
  left?: ReactNode;
  title?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
  icon?: keyof typeof icons | ReactElement;
  active?: boolean;
  disabled?: boolean;
  href?: string;
  LinkWrapper?: LinkWrapperType;
  isIndented?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  loading,
  left,
  title,
  center,
  right,
  icon,
  active,
  disabled,
  isIndented,
  href,
  onClick,
  LinkWrapper,
  ...rest
}) => {
  const itemProps = getItemProps(onClick, href, LinkWrapper);
  const commonProps = { active, disabled };

  const isStorybookIcon = typeof icon === 'string' && icons[icon];

  return (
    <Item {...commonProps} {...rest} {...itemProps}>
      {icon ? (
        <Left {...commonProps}>{isStorybookIcon ? <Icons icon={icon} /> : icon}</Left>
      ) : (
        left && <Left {...commonProps}>{left}</Left>
      )}
      {title || center ? (
        <Center isIndented={!left && !icon && isIndented}>
          {title && (
            <Title {...commonProps} loading={loading}>
              {title}
            </Title>
          )}
          {center && <CenterText {...commonProps}>{center}</CenterText>}
        </Center>
      ) : null}
      {right && <Right {...commonProps}>{right}</Right>}
    </Item>
  );
};

ListItem.defaultProps = {
  loading: false,
  left: null,
  title: <span>Loading state</span>,
  center: null,
  right: null,
  active: false,
  disabled: false,
  href: null,
  LinkWrapper: null,
  onClick: null,
};

export default ListItem;
