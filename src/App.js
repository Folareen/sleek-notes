import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeContext, ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import NotesPreview from "./pages/NotesPreview";
import NotesFullView from "./pages/NotesFullView";
import { ColorModeContext } from "./context/ColorModeContext";

export default function App() {
  const { mode, setMode } = useContext(ColorModeContext);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

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
