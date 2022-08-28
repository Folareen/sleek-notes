import React from 'react'
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ColorModeButton from "../components/ColorModeButton";
import { Box } from "@mui/material";
import {Routes, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const PublicRoutes = () => {
  return (
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
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default PublicRoutes