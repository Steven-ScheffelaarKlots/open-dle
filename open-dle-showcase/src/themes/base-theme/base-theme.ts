export const colorTheme = {
  colors: {
    primary: "#359DCB",
    secondary: "#205F7B",
    focused: "#C2E6F5",
    pressed: "#F6F7F6",
    disabled: "#E4E5E4",
  },
}

const theme = {
  button: {
    colors: {
      active: {
        background: colorTheme.colors.primary,
        text: "#FFFFFF",
      },
      hover: {
        background: colorTheme.colors.secondary,
        text: "#FFFFFF",
      },
      focused: {
        background: colorTheme.colors.focused,
        border: "2px #297B9E solid",
        text: "#297B9E",
      },
      pressed: {
        background: colorTheme.colors.pressed,
        border: "2px #205F7B solid",
        text: "#205F7B",
      },
      disabled: {
        background: colorTheme.colors.disabled,
        text: "#A9ABA9",
      },
    },
    typography: {
        fontFamily: "IBM Plex Sans",
        fontSize: "14px",
        fontWeight: "700",
    },
  },
  boxShadow: {
    elevation01: "0px 2px 4px 0px #00161F3D",
    elevation02: "0px 4px 4px 0px #00000040",
    elevation03: "0px 6px 12px 1px #00161F3D",
  },
  colors: {
    primary: colorTheme.colors.primary,
    secondary: colorTheme.colors.secondary,
    focused: colorTheme.colors.focused,
    pressed: colorTheme.colors.pressed,
    disabled: colorTheme.colors.disabled,
  }
};

export default theme;