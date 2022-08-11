import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { CssBaseline } from "@mui/material";
import NotesPreview from "./pages/NotesPreview";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          {false ? (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<NotesPreview />} />
            </Routes>
          )}
        </Router>
      </ThemeProvider>
    );
  }
}
