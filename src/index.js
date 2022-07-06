import React from "react";
import ReactDOM from "react-dom";

import Wheel from "./components/wheel";

import "./styles.css";

export class App extends React.Component {
  constructor() {
    super();
    this.prizes = [
      "Key-chain",
      "Sweatshirt",
      "Coaching",
      "NFT",
      "Water bottle",
      "Workshop",
      "T-shirt",
      "Pen",
      "Day at Subvisual",
      "Can opener",
      "Event acess",
      "Coffee Mug",
    ];
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to the</h1>
        <h2 className="wheel-name">SubvisuWheel!</h2>
        <img className="logo" alt="logo" src={require(".//assets/logo.png")} />
        <Wheel items={this.prizes} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
