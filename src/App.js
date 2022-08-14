import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
import { CssBaseline } from "@mui/material";
import NotesPreview from "./pages/NotesPreview";
import NotesFullView from "./pages/NotesFullView";

export default function App() {
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
            <Route path="/notes" element={<NotesFullView />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
}
