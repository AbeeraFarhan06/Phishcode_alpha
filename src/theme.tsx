import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "320px",
  md: "375px",
  lg: "425px",
  xl: "768px",
  "2xl": "1536px",
};

const theme = extendTheme({
  breakpoints,
  config,
  fonts: {
    heading:
      '"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    body: '"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "#0E1726",
          _checked: {
            borderColor: "#0E1726",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#F9FDFE",
        color: "black",
        fontFamily:
          '"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      html: {
        bg: "#F9FDFE",
        fontFamily:
          '"Segoe UI Variable", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: "#ffffff",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#e0e0e0",
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#c0c0c0",
      },
    },
  },
});

export default theme;
