import { expect } from '@storybook/jest';
import React, { Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import {
  within,
  fireEvent,
  waitFor,
  screen,
  userEvent,
  findByText,
} from '@storybook/testing-library';
import { Tabs, TabsState, TabWrapper } from './tabs';
import type { ChildrenList } from './tabs.helpers';
import { IconButton } from '../bar/button';
import { Icons } from '../icon/icon';

const colours = Array.from(new Array(15), (val, index) => index).map((i) =>
  Math.floor((1 / 15) * i * 16777215)
    .toString(16)
    .padStart(6, '0')
);

interface FibonacciMap {
  [key: string]: number;
}

function fibonacci(num: number, memo?: FibonacciMap): number {
  /* eslint-disable no-param-reassign */
  if (!memo) {
    memo = {};
  }
  if (memo[num]) {
    return memo[num];
  }
  if (num <= 1) {
    return 1;
  }

  memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  return memo[num];
  /* eslint-enable no-param-reassign */
}

type Panels = Record<string, Omit<ChildrenList[0], 'id'>>;

const panels: Panels = {
  test1: {
    title: 'Tab title #1',
    render: ({ active }) => (active ? <div id="test1">CONTENT 1</div> : null),
  },
  test2: {
    title: 'Tab title #2',
    render: ({ active }) => (
      <div
        id="test2"
        style={{
          background: 'hotpink',
          minHeight: '100%',
          display: active ? 'block' : 'none',
        }}
      >
        CONTENT 2
      </div>
    ),
  },
  test3: {
    title: 'Tab title #3',
    render: ({ active }) =>
      active ? (
        <div id="test3">
          {colours.map((colour, i) => (
            <div
              key={colour}
              style={{
                background: `#${colour}`,
                height: 30 + fibonacci(i + 5) / 10,
              }}
            />
          ))}
        </div>
      ) : null,
  },
  test4: {
    title: 'Tab title #4',
    render: ({ active }) => (active ? <div id="test4">CONTENT 4</div> : null),
  },
  test5: {
    title: 'Tab title #5',
    render: ({ active }) => (active ? <div id="test5">CONTENT 5</div> : null),
  },
  test6: {
    title: 'Tab title #6',
    render: ({ active }) => <TabWrapper active={active} render={() => <div>CONTENT 6</div>} />,
  },
};

const onSelect = action('onSelect');

const content = Object.entries(panels).map(([k, v]) => (
  <div key={k} id={k} title={v.title as any}>
    {v.render}
  </div>
));

export default {
  title: 'Tabs',
  args: {
    menuName: 'Addons',
  },
} satisfies Meta<typeof TabsState>;

type Story = StoryObj<typeof TabsState>;

export const StatefulStatic = {
  render: (args) => (
    <TabsState initial="test2" {...args}>
      <div id="test1" title="With a function">
        {({ active, selected }: { active: boolean; selected: string }) =>
          active ? <div>{selected} is selected</div> : null
        }
      </div>
      <div id="test2" title="With markup">
        <div>test2 is always active (but visually hidden)</div>
      </div>
    </TabsState>
  ),
} satisfies Story;

export const StatefulStaticWithSetButtonTextColors = {
  render: (args) => (
    <div>
      <TabsState initial="test2" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {({ active, selected }: { active: boolean; selected: string }) =>
            active ? <div>{selected} is selected</div> : null
          }
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
  ),
} satisfies Story;

export const StatefulStaticWithSetBackgroundColor = {
  render: (args) => (
    <div>
      <TabsState initial="test2" backgroundColor="rgba(0,0,0,.05)" {...args}>
        <div id="test1" title="With a function" color="#e00000">
          {({ active, selected }: { active: boolean; selected: string }) =>
            active ? <div>{selected} is selected</div> : null
          }
        </div>
        <div id="test2" title="With markup" color="green">
          <div>test2 is always active (but visually hidden)</div>
        </div>
      </TabsState>
    </div>
  ),
} satisfies Story;

const customViewports = {
  sized: {
    name: 'Sized',
    styles: {
      width: '380px',
      height: '500px',
    },
  },
};

export const StatefulDynamicWithOpenTooltip = {
  parameters: {
    viewport: {
      defaultViewport: 'sized',
      viewports: customViewports,
    },
    theme: 'light',
    chromatic: { viewports: [380] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await waitFor(async () => {
      await expect(canvas.getAllByRole('tab')).toHaveLength(3);
      await expect(canvas.getByRole('tab', { name: /Addons/ })).toBeInTheDocument();
    });

    await waitFor(async () => {
      const addonsTab = await canvas.findByRole('tab', { name: /Addons/ });
      const tooltip = await screen.queryByTestId('tooltip');

      if (!tooltip) {
        await userEvent.click(addonsTab);
      }

      if (!tooltip) {
        throw new Error('Tooltip not found');
      }

      await expect(screen.queryByTestId('tooltip')).toBeInTheDocument();
    });
  },
  render: (args) => (
    <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => (
        <div key={k} id={k} title={v.title as any}>
          {v.render}
        </div>
      ))}
    </TabsState>
  ),
} satisfies Story;

export const StatefulDynamicWithSelectedAddon = {
  ...StatefulDynamicWithOpenTooltip,
  play: async (context) => {
    await StatefulDynamicWithOpenTooltip.play(context);
    const canvas = within(context.canvasElement);

    await waitFor(async () => {
      const popperContainer = await screen.findByTestId('tooltip');
      const tab4 = await findByText(popperContainer, 'Tab title #4', {});
      fireEvent(tab4, new MouseEvent('click', { bubbles: true }));
      const content4 = await canvas.findByText('CONTENT 4');
      await expect(content4).toBeVisible();
    });

    // reopen the tooltip
    await StatefulDynamicWithOpenTooltip.play(context);
  },
  render: (args) => (
    <TabsState initial="test1" {...args}>
      {Object.entries(panels).map(([k, v]) => (
        <div key={k} id={k} title={v.title as any}>
          {v.render}
        </div>
      ))}
    </TabsState>
  ),
} satisfies Story;

export const StatefulNoInitial = {
  render: (args) => <TabsState {...args}>{content}</TabsState>,
} satisfies Story;

export const StatelessBordered = {
  render: (args) => (
    <Tabs
      bordered
      absolute={false}
      selected="test3"
      menuName="Addons"
      actions={{
        onSelect,
      }}
      {...args}
    >
      {content}
    </Tabs>
  ),
} satisfies Story;

export const StatelessWithTools = {
  render: (args) => (
    <Tabs
      bordered
      selected="test3"
      menuName="Addons"
      actions={{
        onSelect,
      }}
      tools={
        <Fragment>
          <IconButton title="Tool 1">
            <Icons icon="memory" />
          </IconButton>
          <IconButton title="Tool 2">
            <Icons icon="cpu" />
          </IconButton>
        </Fragment>
      }
      {...args}
    >
      {content}
    </Tabs>
  ),
} satisfies Story;

export const StatelessAbsolute = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <Tabs
      absolute
      selected="test3"
      menuName="Addons"
      actions={{
        onSelect,
      }}
      {...args}
    >
      {content}
    </Tabs>
  ),
} satisfies Story;

export const StatelessAbsoluteBordered = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <Tabs
      absolute
      bordered
      menuName="Addons"
      selected="test3"
      actions={{
        onSelect,
      }}
      {...args}
    >
      {content}
    </Tabs>
  ),
} satisfies Story;

export const StatelessEmpty = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <Tabs
      actions={{
        onSelect,
      }}
      bordered
      menuName="Addons"
      absolute
      {...args}
    />
  ),
} satisfies Story;
