import React from 'react'
import NotesPreview from "../pages/NotesPreview";
import NoteFullView from "../pages/NoteFullView";
import {Routes, Route } from 'react-router-dom';
import NotesContextProvider from '../context/NotesContext';


const PrivateRoutes = () => {
  return (
    <NotesContextProvider>
      <Routes>
        <Route path="/" element={<NotesPreview />} />
        <Route path="/:id" element={<NoteFullView />} />
      </Routes>
    </NotesContextProvider>

  )
}

export default PrivateRoutes