import { Container } from "@mui/material";
import React, { Component } from "react";
import NotePreview from "./components/NotePreview";
export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <NotePreview />
      </Container>
    );
  }
}
