import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark' ,
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
     styles: {
        global: {
        body: {
            bg: "#F9FDFE", // Set body background to black
            color: "black", // Optional: make text readable
        },
        html: {
            bg: "#F9FDFE", // Also apply to html
        },
        },
    }

});

export default theme;