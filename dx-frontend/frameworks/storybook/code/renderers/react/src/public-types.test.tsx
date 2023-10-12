import { describe, test } from '@jest/globals';

import { satisfies } from '@storybook/core-common';
import type { Args, StoryAnnotations, StrictArgs } from '@storybook/types';
import { expectTypeOf } from 'expect-type';
import type { KeyboardEventHandler, ReactNode } from 'react';
import React from 'react';

import type { SetOptional } from 'type-fest';

import type { Decorator, Meta, StoryObj } from './public-types';
import type { ReactRenderer } from './types';

type ReactStory<TArgs, TRequiredArgs> = StoryAnnotations<ReactRenderer, TArgs, TRequiredArgs>;

type ButtonProps = { label: string; disabled: boolean };
const Button: (props: ButtonProps) => JSX.Element = () => <></>;

describe('Args can be provided in multiple ways', () => {
  test('✅ All required args may be provided in meta', () => {
    const meta = satisfies<Meta<typeof Button>>()({
      component: Button,
      args: { label: 'good', disabled: false },
    });

    type Story = StoryObj<typeof meta>;
    const Basic: Story = {};

    expectTypeOf(Basic).toEqualTypeOf<
      ReactStory<ButtonProps, SetOptional<ButtonProps, 'label' | 'disabled'>>
    >();
  });

  test('✅ Required args may be provided partial in meta and the story', () => {
    const meta = satisfies<Meta<typeof Button>>()({
      component: Button,
      args: { label: 'good' },
    });
    const Basic: StoryObj<typeof meta> = {
      args: { disabled: false },
    };

    type Expected = ReactStory<ButtonProps, SetOptional<ButtonProps, 'label'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });

  test('❌ The combined shape of meta args and story args must match the required args.', () => {
    {
      const meta = satisfies<Meta<typeof Button>>()({ component: Button });
      const Basic: StoryObj<typeof meta> = {
        // @ts-expect-error disabled not provided ❌
        args: { label: 'good' },
      };

      type Expected = ReactStory<ButtonProps, ButtonProps>;
      expectTypeOf(Basic).toEqualTypeOf<Expected>();
    }
    {
      const meta = satisfies<Meta<typeof Button>>()({
        component: Button,
        args: { label: 'good' },
      });
      // @ts-expect-error disabled not provided ❌
      const Basic: StoryObj<typeof meta> = {};

      type Expected = ReactStory<ButtonProps, SetOptional<ButtonProps, 'label'>>;
      expectTypeOf(Basic).toEqualTypeOf<Expected>();
    }
    {
      const meta = satisfies<Meta<ButtonProps>>()({ component: Button });
      const Basic: StoryObj<typeof meta> = {
        // @ts-expect-error disabled not provided ❌
        args: { label: 'good' },
      };

      type Expected = ReactStory<ButtonProps, ButtonProps>;
      expectTypeOf(Basic).toEqualTypeOf<Expected>();
    }
  });

  test('Component can be used as generic parameter for StoryObj', () => {
    type Expected = ReactStory<ButtonProps, Partial<ButtonProps>>;
    expectTypeOf<StoryObj<typeof Button>>().toEqualTypeOf<Expected>();
  });
});

test('✅ All void functions are optional', () => {
  interface CmpProps {
    label: string;
    disabled: boolean;
    onClick(): void;
    onKeyDown: KeyboardEventHandler;
    onLoading: (s: string) => JSX.Element;
    submitAction(): void;
  }

  const Cmp: (props: CmpProps) => JSX.Element = () => <></>;

  const meta = satisfies<Meta<CmpProps>>()({
    component: Cmp,
    args: { label: 'good' },
  });

  const Basic: StoryObj<typeof meta> = {
    args: { disabled: false, onLoading: () => <div>Loading...</div> },
  };

  type Expected = ReactStory<
    CmpProps,
    SetOptional<CmpProps, 'label' | 'onClick' | 'onKeyDown' | 'submitAction'>
  >;
  expectTypeOf(Basic).toEqualTypeOf<Expected>();
});

type ThemeData = 'light' | 'dark';
declare const Theme: (props: { theme: ThemeData; children?: ReactNode }) => JSX.Element;

describe('Story args can be inferred', () => {
  test('Correct args are inferred when type is widened for render function', () => {
    type Props = ButtonProps & { theme: ThemeData };

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      render: (args, { component }) => {
        // component is not null as it is provided in meta
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const Component = component!;
        return (
          <Theme theme={args.theme}>
            <Component {...args} />
          </Theme>
        );
      },
    });

    const Basic: StoryObj<typeof meta> = { args: { theme: 'light', label: 'good' } };

    type Expected = ReactStory<Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });

  const withDecorator: Decorator<{ decoratorArg: number }> = (Story, { args }) => (
    <>
      Decorator: {args.decoratorArg}
      <Story args={{ decoratorArg: 0 }} />
    </>
  );

  test('Correct args are inferred when type is widened for decorators', () => {
    type Props = ButtonProps & { decoratorArg: number };

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      decorators: [withDecorator],
    });

    const Basic: StoryObj<typeof meta> = { args: { decoratorArg: 0, label: 'good' } };

    type Expected = ReactStory<Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });

  test('Correct args are inferred when type is widened for multiple decorators', () => {
    type Props = ButtonProps & { decoratorArg: number; decoratorArg2: string };

    const secondDecorator: Decorator<{ decoratorArg2: string }> = (Story, { args }) => (
      <>
        Decorator: {args.decoratorArg2}
        <Story />
      </>
    );

    // decorator is not using args
    const thirdDecorator: Decorator<Args> = (Story) => (
      <>
        <Story />
      </>
    );

    // decorator is not using args
    const fourthDecorator: Decorator<StrictArgs> = (Story) => (
      <>
        <Story />
      </>
    );

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      decorators: [withDecorator, secondDecorator, thirdDecorator, fourthDecorator],
    });

    const Basic: StoryObj<typeof meta> = {
      args: { decoratorArg: 0, decoratorArg2: '', label: 'good' },
    };

    type Expected = ReactStory<Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });
});

test('StoryObj<typeof meta> is allowed when meta is upcasted to Meta<Props>', () => {
  expectTypeOf<StoryObj<Meta<ButtonProps>>>().toEqualTypeOf<
    ReactStory<
      ButtonProps & { children?: ReactNode },
      Partial<ButtonProps & { children?: ReactNode }>
    >
  >();
});

test('StoryObj<typeof meta> is allowed when meta is upcasted to Meta<typeof Cmp>', () => {
  expectTypeOf<StoryObj<Meta<typeof Button>>>().toEqualTypeOf<
    ReactStory<
      ButtonProps & { children?: ReactNode },
      Partial<ButtonProps & { children?: ReactNode }>
    >
  >();
});

test('StoryObj<typeof meta> is allowed when all arguments are optional', () => {
  expectTypeOf<StoryObj<Meta<{ label?: string }>>>().toEqualTypeOf<
    ReactStory<{ label?: string; children?: ReactNode }, { label?: string; children?: ReactNode }>
  >();
});

test('Meta can be used without generic', () => {
  expectTypeOf({ component: Button }).toMatchTypeOf<Meta>();
});

test('Props can be defined as interfaces, issue #21768', () => {
  interface Props {
    label: string;
  }

  const Component = ({ label }: Props) => <>{label}</>;

  const withDecorator: Decorator = (Story) => (
    <>
      <Story />
    </>
  );

  const meta = {
    component: Component,
    args: {
      label: 'label',
    },
    decorators: [withDecorator],
  } satisfies Meta<Props>;

  const Basic: StoryObj<typeof meta> = {};

  type Expected = ReactStory<Props, SetOptional<Props, 'label'>>;
  expectTypeOf(Basic).toEqualTypeOf<Expected>();
});

test('Components without Props can be used, issue #21768', () => {
  const Component = () => <>Foo</>;
  const withDecorator: Decorator = (Story) => (
    <>
      <Story />
    </>
  );

  const meta = {
    component: Component,
    decorators: [withDecorator],
  } satisfies Meta<typeof Component>;

  const Basic: StoryObj<typeof meta> = {};

  type Expected = ReactStory<{}, {}>;
  expectTypeOf(Basic).toEqualTypeOf<Expected>();
});

test('Meta is broken when using discriminating types, issue #23629', () => {
  type TestButtonProps = {
    text: string;
  } & (
    | {
        id?: string;
        onClick?: (e: unknown, id: string | undefined) => void;
      }
    | {
        id: string;
        onClick: (e: unknown, id: string) => void;
      }
  );
  const TestButton: React.FC<TestButtonProps> = ({ text }) => {
    return <p>{text}</p>;
  };

  expectTypeOf({
    title: 'Components/Button',
    component: TestButton,
    args: {
      text: 'Button',
    },
  }).toMatchTypeOf<Meta<TestButtonProps>>();
});
