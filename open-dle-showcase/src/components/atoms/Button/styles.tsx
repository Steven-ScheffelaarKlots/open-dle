// src/components/atoms/Button/styles.tsx
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../themes/types';

interface Props {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}


export const useStyles = createUseStyles<string, Props, Theme>((theme) => ( {
  button: {
    background: theme.button.colors.active.background,
    color: theme.button.colors.active.text,
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    justifyContent: "space-between",
    minWidth: "120px",
    maxWidth: "240px",
    minHeight: "32px",
    maxHeight: "32px",
    ...theme.button.typography,
    boxShadow: theme.boxShadow.elevation01,
    "&:hover": {
      background: theme.button.colors.hover.background,
      color: theme.button.colors.hover.text,
      boxShadow: theme.boxShadow.elevation03,
    },
    "&:focus": {
      background: theme.button.colors.focused.background,
      border: theme.button.colors.focused.border,
      boxShadow: theme.boxShadow.elevation02,
      color: theme.button.colors.focused.text,
    },
    "&:active": {
      background: theme.button.colors.pressed.background,
      border: theme.button.colors.pressed.border,
      boxShadow: "none",
      color: theme.button.colors.pressed.text,
    },
    "&:disabled": {
      background: theme.button.colors.disabled.background,
      boxShadow: "none",
      color: theme.button.colors.disabled.text,
      cursor: "not-allowed",
    },
  },
}));