import type { Preview } from "@storybook/react";
import React from 'react';
import { ThemeProvider } from 'react-jss';
import theme from '../src/themes/base-theme/base-theme'; // Adjust the import path to your theme file

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs']
};

export default preview;
