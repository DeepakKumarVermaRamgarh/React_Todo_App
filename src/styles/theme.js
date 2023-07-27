export const baseTheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#2b2b2b",
    success: "#4caf50",
    danger: "#f44336",

    bg: "#E5E4E8",
    font: "#19191B",
  },

  media: {
    extraLarge: "(max-width: 1140px)",
    large: "(max-width: 960px)",
    medium: "(max-width: 720px)",
    small: "(max-width: 540px)",
  },
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg: "#E5E4E8",
    font: "#19191B",
    primary: "lightgray",
    secondary: "#f8f8f8",
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    bg: "#19191B",
    font: "#E5E4E8",
    primary: "#3b3b3b",
    secondary: "#262629",
  },
};
