import React, { Component } from "react";
import NotePreview from "./components/NotePreview";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
    };
  }

  changeValue = () => {
    this.setState({ edit: !this.state.edit });
  };

  componentDidUpdate() {
    if (this.state.edit) {
      document.querySelector("textarea").disabled = false;
      document.querySelector(".state").textContent = "state is true";
    } else {
      document.querySelector("textarea").disabled = true;
      document.querySelector(".state").textContent = "state is false";
    }
  }

  render() {
    return (
      <div>
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <NotePreview />
        <p className="state"></p>
        <textarea>heyyyy</textarea>
        <button onClick={this.changeValue}>change number</button>
      </div>
    );
  }
}
