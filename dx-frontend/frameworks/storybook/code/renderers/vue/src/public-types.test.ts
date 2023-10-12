import { satisfies } from '@storybook/core-common';
import type { ComponentAnnotations, StoryAnnotations } from '@storybook/types';
import { expectTypeOf } from 'expect-type';
import type { SetOptional } from 'type-fest';
import type { Component } from 'vue';
import type { ExtendedVue } from 'vue/types/vue';
import { Vue } from 'vue/types/vue';
import type { Decorator, Meta, StoryObj } from './public-types';
import Button from './__tests__/Button.vue';
import type { VueRenderer } from './types';

describe('Meta', () => {
  test('Generic parameter of Meta can be a component', () => {
    const meta: Meta<typeof Button> = {
      component: Button,
      args: { label: 'good', disabled: false },
    };

    expectTypeOf(meta).toEqualTypeOf<
      ComponentAnnotations<
        VueRenderer,
        {
          disabled: boolean;
          label: string;
        }
      >
    >();
  });

  test('Generic parameter of Meta can be the props of the component', () => {
    const meta: Meta<{ disabled: boolean; label: string }> = {
      component: Button,
      args: { label: 'good', disabled: false },
    };

    expectTypeOf(meta).toEqualTypeOf<
      ComponentAnnotations<VueRenderer, { disabled: boolean; label: string }>
    >();
  });
});

describe('StoryObj', () => {
  type ButtonProps = {
    disabled: boolean;
    label: string;
  };

  test('✅ Required args may be provided partial in meta and the story', () => {
    const meta = satisfies<Meta<typeof Button>>()({
      component: Button,
      args: { label: 'good' },
    });

    type Actual = StoryObj<typeof meta>;
    type Expected = StoryAnnotations<VueRenderer, ButtonProps, SetOptional<ButtonProps, 'label'>>;
    expectTypeOf<Actual>().toEqualTypeOf<Expected>();
  });

  test('❌ The combined shape of meta args and story args must match the required args.', () => {
    {
      const meta = satisfies<Meta<typeof Button>>()({ component: Button });

      type Expected = StoryAnnotations<VueRenderer, ButtonProps, ButtonProps>;
      expectTypeOf<StoryObj<typeof meta>>().toEqualTypeOf<Expected>();
    }
    {
      const meta = satisfies<Meta<typeof Button>>()({
        component: Button,
        args: { label: 'good' },
      });
      // @ts-expect-error disabled not provided ❌
      const Basic: StoryObj<typeof meta> = {};

      type Expected = StoryAnnotations<VueRenderer, ButtonProps, SetOptional<ButtonProps, 'label'>>;
      expectTypeOf(Basic).toEqualTypeOf<Expected>();
    }
    {
      const meta = satisfies<Meta<{ label: string; disabled: boolean }>>()({ component: Button });
      const Basic: StoryObj<typeof meta> = {
        // @ts-expect-error disabled not provided ❌
        args: { label: 'good' },
      };

      type Expected = StoryAnnotations<VueRenderer, ButtonProps, ButtonProps>;
      expectTypeOf(Basic).toEqualTypeOf<Expected>();
    }
  });

  test('Component can be used as generic parameter for StoryObj', () => {
    expectTypeOf<StoryObj<typeof Button>>().toEqualTypeOf<
      StoryAnnotations<VueRenderer, ButtonProps>
    >();
  });
});

type ThemeData = 'light' | 'dark';

type ComponentProps<C> = C extends ExtendedVue<any, any, any, any, infer P>
  ? P
  : C extends Component<infer P>
  ? P
  : unknown;

describe('Story args can be inferred', () => {
  test('Correct args are inferred when type is widened for render function', () => {
    type Props = ComponentProps<typeof Button> & { theme: ThemeData };

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      render: (args) =>
        Vue.extend({
          components: { Button },
          template: `<div>Using the theme: ${args.theme}<Button v-bind="$props"/></div>`,
          props: Object.keys(args),
        }),
    });

    const Basic: StoryObj<typeof meta> = { args: { theme: 'light', label: 'good' } };

    type Expected = StoryAnnotations<VueRenderer, Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });

  const withDecorator: Decorator<{ decoratorArg: string }> = (
    storyFn,
    { args: { decoratorArg } }
  ) =>
    Vue.extend({
      components: { Story: storyFn() },
      template: `<div>Decorator: ${decoratorArg}<Story/></div>`,
    });

  test('Correct args are inferred when type is widened for decorators', () => {
    type Props = ComponentProps<typeof Button> & { decoratorArg: string };

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      decorators: [withDecorator],
    });

    const Basic: StoryObj<typeof meta> = { args: { decoratorArg: 'title', label: 'good' } };

    type Expected = StoryAnnotations<VueRenderer, Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });

  test('Correct args are inferred when type is widened for multiple decorators', () => {
    type Props = ComponentProps<typeof Button> & { decoratorArg: string; decoratorArg2: string };

    const secondDecorator: Decorator<{ decoratorArg2: string }> = (
      storyFn,
      { args: { decoratorArg2 } }
    ) => {
      return Vue.extend({
        components: { Story: storyFn() },
        template: `<div>Decorator: ${decoratorArg2}<Story/></div>`,
      });
    };

    const meta = satisfies<Meta<Props>>()({
      component: Button,
      args: { disabled: false },
      decorators: [withDecorator, secondDecorator],
    });

    const Basic: StoryObj<typeof meta> = {
      args: { decoratorArg: '', decoratorArg2: '', label: 'good' },
    };

    type Expected = StoryAnnotations<VueRenderer, Props, SetOptional<Props, 'disabled'>>;
    expectTypeOf(Basic).toEqualTypeOf<Expected>();
  });
});
