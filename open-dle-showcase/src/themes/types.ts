export interface ColorTheme {
    colors: {
        primary: string;
        secondary: string;
        focused: string;
        pressed: string;
        disabled: string;
    }
}

export interface Theme {
  button: {
    colors: {
      active: {
        background: string;
        text: string;
      };
      hover: {
        background: string;
        text: string;
      };
      focused: {
        background: string;
        border: string;
        text: string;
      };
      pressed: {
        background: string;
        border: string;
        text: string;
      };
      disabled: {
        background: string;
        text: string;
      };
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
    };
  };
  boxShadow: {
    elevation01: string;
    elevation02: string;
    elevation03: string;
  };
}
