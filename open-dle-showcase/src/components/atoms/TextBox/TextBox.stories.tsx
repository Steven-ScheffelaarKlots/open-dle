import TextBox from "./TextBox"; // Adjust the import path to your Button component
import { StoryObj } from "@storybook/react";

// Default export that defines component metadata
const textBoxMeta = {
  title: "Components/Textbox",
  component: TextBox,
  parameters: {
    layout: "centered",
  },
};

export default textBoxMeta;

type Story = StoryObj<typeof TextBox>;

// Story variants
export const Primary: Story = {
  args: {
    placeholder: "Submit",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Click Me",
  },
};
