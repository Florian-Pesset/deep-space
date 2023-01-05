import { theme } from "@chakra-ui/react";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#FFFFFF",
    secondary: "#D0D6F9",
    accent: "#0B0D17",
  },
  fonts: {
    body: '"Barlow", sans-serif',
    heading: '"Bellefair", sans-serif',
    mono: '"Roboto Mono", monospace',
    link: '"Barlow", sans-serif',
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "28px",
    "3xl": "38px",
    "4xl": "50px",
    "5xl": "150px",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};
export default customTheme;
