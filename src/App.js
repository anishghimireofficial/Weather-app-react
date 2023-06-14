import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>

      <div className="footer-info">
        <span className=" footer">
          Developed by | &nbsp;
          <a target="_blank" href="https://anish-ghimire.com.np/">
            Anish Sharma Ghimire
          </a>
        </span>
      </div>
    </React.Fragment>
  );
}

export default App;
