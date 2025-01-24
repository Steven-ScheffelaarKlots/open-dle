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

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    backgroundColor: "red",
  },
};

export const Negative: Story = {
  args: {
    children: "Cancel",
    backgroundColor: "red",
  },
};

export const Child: Story = {
  args: {
    children: <div>Apples</div>,
  },
};

export const Small: Story = {
  args: {
    children: "Primary",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "Primary" ,
    size: "medium",
  }
};

export const Large: Story = {
  args: {
    children: "Primary",
    size: "large",
  }
};