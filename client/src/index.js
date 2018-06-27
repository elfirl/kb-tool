import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Default from "./components/default";
import registerServiceWorker from "./registerServiceWorker";
import "./App.js";

ReactDOM.render(<Default />, document.getElementById("body-component"));
registerServiceWorker();
