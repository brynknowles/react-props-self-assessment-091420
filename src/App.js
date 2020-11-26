import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'
import NotesContainer from "./Containers/NotesContainer";

class App extends Component {
  render() {
    // Header should have a text key in its props that evaluates to a string that says "Hello World"
    // The NotesContainer should be rendered underneath the Header on the DOM
    return (
      <>
        <Header text={"Hello World"}/>
        <NotesContainer />
      </>
    )
  }
}

export default App;
