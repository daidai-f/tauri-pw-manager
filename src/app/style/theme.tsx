import { createTheme } from "@mui/material/styles";
import CascadiaMono from "./../../../assets/CascadiaMono.woff2";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "transparent",
      paper: "#2c2f3d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#57c7ff",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    primary: { main: "#ff6ac1" },
    secondary: { main: "#ff6ac1" },
  },
  typography: { fontFamily: "CascadiaMono" },
  components: {
    MuiTextField: {
      defaultProps: {
        spellCheck: false,
      },
      styleOverrides: {
        root: {
          minWidth: "300px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'CascadiaMono';
          src: url(${CascadiaMono}) format('woff2');
        }
      `,
    },
  },
});

export default theme;
