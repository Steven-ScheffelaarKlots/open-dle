import { createUseStyles } from 'react-jss';
import { Theme } from '../../../themes/types';

interface Props {
  color?: string;
}

export const useStyles = createUseStyles<string, Props, Theme>((theme) => ({
  textbox: {
    border: `1px solid ${theme.colors.primary}`,
    padding: "10px",
    borderRadius: "4px",
    outline: "none",
    "&:focus": {
      borderColor: theme.colors.secondary,
    },
  },
}));