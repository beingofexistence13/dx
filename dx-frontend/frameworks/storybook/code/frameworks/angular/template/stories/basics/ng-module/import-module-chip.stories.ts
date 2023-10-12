import { StoryFn, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ChipsModule } from './angular-src/chips.module';
import { ChipComponent } from './angular-src/chip.component';

const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [ChipsModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<ChipComponent>;

export const Chip: Story = {
  args: {
    displayText: 'Chip',
  },
  argTypes: {
    removeClicked: { action: 'Remove icon clicked' },
  },
};
