import SubmitBox from './SubmitBox';
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const SubmitBoxMeta = {
  title: 'Molecules/SubmitBox',
  component: SubmitBox,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export default SubmitBoxMeta;

type Story = StoryObj<typeof SubmitBox>;

// Story variants
export const Primary: Story = {
    args : {
         buttonText: 'Submit',
        }
    };

export const Secondary: Story = {
    args : {
         children: 'Click Me',
        }
    };