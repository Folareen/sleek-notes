import React from 'react'
import DocumentsPreview from "../pages/DocumentsPreview";
import DocumentFullView from "../pages/DocumentFullView";
import {Routes, Route } from 'react-router-dom';


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DocumentsPreview />} />
      <Route path="/:id" element={<DocumentFullView />} />
    </Routes>
  )
}

export default PrivateRoutes