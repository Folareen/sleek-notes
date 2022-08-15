import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import NotesPreview from "./pages/NotesPreview";
import NotesFullView from "./pages/NotesFullView";
import { ColorModeContext } from "./context/ColorModeContext";
import ColorModeButton from "./components/ColorModeButton";
import { Box } from "@mui/material";

export default function App() {
  const { mode } = useContext(ColorModeContext);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {true ? (
          <>
            <Box
              sx={{
                width: "max-content",
                p: 0,
                position: "fixed",
                right: 3,
                top: 3,
              }}
            >
              <ColorModeButton />
            </Box>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </>
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
