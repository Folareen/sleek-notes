import React from 'react'
import NotesPreview from "../pages/NotesPreview";
import NotesFullView from "../pages/NotesFullView";
import {Routes, Route } from 'react-router-dom';


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NotesPreview />} />
      <Route path="/notes" element={<NotesFullView />} />
    </Routes>
  )
}

export default PrivateRoutes