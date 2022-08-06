import React, { Component } from "react";
import NotePreviewTest from "./components/NotePreviewTest";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteView from "./components/NoteView";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<NotePreviewTest />} />
          <Route path="/noteview/:id" element={<NoteView />} />
          {/* <Route path="/view" element={NotePreviewTest} /> */}
        </Routes>
      </Router>
    );
  }
}
