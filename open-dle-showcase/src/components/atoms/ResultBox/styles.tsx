import { createUseStyles } from 'react-jss';
import { ColorTheme } from '../../../themes/types';

interface Props {
  backgroundColor?: string;
}

export const useStyles = createUseStyles<string, Props, ColorTheme>((theme) => ({
  textbox: {
    border: `1px solid ${theme.colors.primary}`,
    padding: "10px",
    borderRadius: "4px",
    outline: "none",
    "&:focus": {
      borderColor: theme.colors.focused,
    },
  }
}));