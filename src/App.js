import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeContext, ThemeProvider } from "@emotion/react";
import { lightModeTheme, darkModeTheme } from "./styles/theme";
import { CssBaseline } from "@mui/material";
import NotesPreview from "./pages/NotesPreview";
import NotesFullView from "./pages/NotesFullView";
import { ColorThemeContext } from "./context/themeContext";
export default function App() {
  const { darkThemeMode, setDarkThemeMode } = useContext(ColorThemeContext);

  console.log(darkThemeMode);

  return (
    <ThemeProvider theme={darkThemeMode ? darkModeTheme : lightModeTheme}>
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
