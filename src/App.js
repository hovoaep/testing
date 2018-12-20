import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Button className="primary">XXX</Button>
            {/* <button className="btn">Start Now</button> */}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
