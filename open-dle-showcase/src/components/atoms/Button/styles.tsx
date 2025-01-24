// src/components/atoms/Button/styles.tsx
import { createUseStyles } from 'react-jss';
import { Theme } from '../../../themes/types';

interface Props {
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
}


export const useStyles = createUseStyles<string, Props, Theme>((theme) => ( {
  button: {
    background: (props) => props.backgroundColor ?? theme.colors.primary,
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "2em",
    cursor: "pointer",
    "&:hover": {
      background: theme.colors.secondary,
    },
  },
}));