import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import AuthContextProvider from "./context/AuthContext";
import Routes from "./routes/Routes";
import { ColorModeContext } from "./context/ColorModeContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const { mode } = useContext(ColorModeContext);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
        <ToastContainer />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
