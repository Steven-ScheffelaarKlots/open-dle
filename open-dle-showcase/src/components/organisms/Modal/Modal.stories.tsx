import Modal from "./Modal"; // Adjust the import path to your Button component
import { StoryObj } from "@storybook/react";

// Default export that defines component metadata
const textBoxMeta = {
  title: "Organism/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
};

export default textBoxMeta;

type Story = StoryObj<typeof Modal>;

// Story variants
export const Primary: Story = {
  args: {
    isOpen: true,
  },
};

export const Secondary: Story = {
  args: {
    isOpen: true,
  },
};
