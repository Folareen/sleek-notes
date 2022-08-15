import { createTheme } from "@mui/material/styles";

export const lightModeTheme = createTheme({
  palette: {
    primary: {
      main: "#324987",
    },
    secondary: {
      main: "#005792",
    },
    info: {
      main: "#BAE8E8",
    },
    danger: {
      main: "#731114",
    },
    success: {
      main: "#278016",
    },
    light: {
      main: "#E3F6F5",
    },
  },
});

export const darkModeTheme = createTheme({
  palette: {
    primary: {
      main: "#E3F6F5",
    },
    secondary: {
      main: "#005792",
    },
    info: {
      main: "#BAE8E8",
    },
    danger: {
      main: "#731114",
    },
    success: {
      main: "#278016",
    },
    light: {
      main: "#324987",
    },
  },
});
