import React from "react";
import ReactDOM from "react-dom";
import { Player } from "./Player.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Player />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
