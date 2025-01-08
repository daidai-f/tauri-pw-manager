"use client";

import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Snackbar,
  Alert,
  AlertColor,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import { ArrowBack, Close, Fullscreen, Minimize } from "@mui/icons-material";
import {
  window_close,
  window_minimize,
  window_toggle_fullscreen,
} from "./backend";
import { Page, PageContext } from "./utils";
import LoginPage from "./login/page";
import SignUpPage from "./signup/page";
import MainPage from "./main/page";
import theme from "./style/theme";

const TitleBar = () => (
  <Box
    data-tauri-drag-region
    position="fixed"
    height="3rem"
    width="100vw"
    display="flex"
    justifyContent="flex-end"
    paddingRight="5px"
  >
    <Tooltip title="Minimize">
      <IconButton
        size="small"
        disableRipple
        tabIndex={-1}
        onClick={window_minimize}
      >
        <Minimize />
      </IconButton>
    </Tooltip>
    <Tooltip title="Maximize">
      <IconButton
        size="small"
        disableRipple
        tabIndex={-1}
        onClick={window_toggle_fullscreen}
      >
        <Fullscreen />
      </IconButton>
    </Tooltip>
    <Tooltip title="Close">
      <IconButton
        size="small"
        disableRipple
        tabIndex={-1}
        onClick={window_close}
      >
        <Close />
      </IconButton>
    </Tooltip>
  </Box>
);

const backPages = {
  login: undefined,
  signup: "login",
  main: "main",
};
const pageComponents = {
  login: LoginPage,
  signup: SignUpPage,
  main: MainPage,
};

function App() {
  const [page, setPage] = useState("login" as Page);
  const [{ message, severity }, setMessage] = useState({
    message: "",
    severity: "error" as AlertColor,
  });
  const [showMessage, setShowMessage] = useState(false);
  const goToPage = (page: Page) => {
    setPage(page);
    setShowMessage(false);
  };
  const showAlert = (message: string, severity: AlertColor = "error") => {
    setMessage({ message, severity });
    setShowMessage(true);
  };
  return (
    <>
      <TitleBar />
      {page !== "login" && (
        <IconButton
          sx={{ position: "fixed", top: 10, left: 10 }}
          onClick={() => goToPage(backPages[page] as Page)}
        >
          <ArrowBack />
        </IconButton>
      )}
      <PageContext.Provider value={{ goToPage, showAlert }}>
        {React.createElement(pageComponents[page])}
      </PageContext.Provider>
      <Snackbar
        open={showMessage}
        autoHideDuration={3000}
        onClose={() => setShowMessage(false)}
      >
        <Alert severity={severity} onClose={() => setShowMessage(false)}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}
