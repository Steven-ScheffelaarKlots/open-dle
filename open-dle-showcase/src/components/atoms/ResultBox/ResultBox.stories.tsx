import ResultBox from "./ResultBox"; // Adjust the import path to your Button component
import { StoryObj } from "@storybook/react";

// Default export that defines component metadata
const textBoxMeta = {
  title: "Components/ResultBox",
  component: ResultBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default textBoxMeta;

type Story = StoryObj<typeof ResultBox>;

// Story variants
export const Primary: Story = {
  args: {
    backgroundColor: "blue",
  },
};

export const Secondary: Story = {
  args: {
    backgroundColor: "green",
  },
};
