import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import "./css/item.css";
import Customer from "./customer/Customer";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Customer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
