import { StoryFn, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ChipsModule } from './angular-src/chips.module';
import { ChipsGroupComponent } from './angular-src/chips-group.component';

const meta: Meta<ChipsGroupComponent> = {
  // title: 'Basics / NgModule / Module with multiple component',
  component: ChipsGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ChipsModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<ChipsGroupComponent>;

export const ChipsGroup: Story = {
  args: {
    chips: [
      {
        id: 1,
        text: 'Chip 1',
      },
      {
        id: 2,
        text: 'Chip 2',
      },
    ],
  },
  argTypes: {
    removeChipClick: { action: 'Remove chip' },
    removeAllChipsClick: { action: 'Remove all chips clicked' },
  },
};
