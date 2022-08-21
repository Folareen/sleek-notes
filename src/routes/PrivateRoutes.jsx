import React from 'react'
import DocumentsPreview from "../pages/DocumentsPreview";
import DocumentFullView from "../pages/DocumentFullView";
import {Routes, Route } from 'react-router-dom';
import DocumentsContextProvider from '../context/DocumentsContext';


const PrivateRoutes = () => {
  return (
    <DocumentsContextProvider>
      <Routes>
        <Route path="/" element={<DocumentsPreview />} />
        <Route path="/:id" element={<DocumentFullView />} />
      </Routes>
    </DocumentsContextProvider>

  )
}

export default PrivateRoutes