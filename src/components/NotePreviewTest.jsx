import React, { Component } from 'react'
import { Container } from "@mui/material";
import { testFirebase } from "../testFirebase";
import NotePreview from "./NotePreview";



export default class notePreviewTest extends Component {
  render() {
    return (
    <Container>
        {testFirebase.map((note) => {
          const { id, title, body, date } = note;
          return <NotePreview id={id} title={title} body={body} date={date} />;
        })}
    </Container>
    )
  }
}
