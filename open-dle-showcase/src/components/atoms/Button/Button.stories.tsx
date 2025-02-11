import Button from './Button'; // Adjust the import path to your Button component
import { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';


// Default export that defines component metadata
const buttonMeta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
};

export default buttonMeta;

type Story = StoryObj<typeof Button>;

export const Active: Story = {
  args: {
    children: "BUTTON",
  },
};

export const Hover: Story = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};

export const Focused: Story = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};

export const Pressed: Story = {
  args: {
    children: "BUTTON",
  },
  parameters: {
    pseudo: {
      active: true,
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "BUTTON",
    disabled: true,
  },
};