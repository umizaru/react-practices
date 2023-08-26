import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MemoApp from "./MemoApp";
import MemoEditForm from "./MemoEditForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoApp />
  </React.StrictMode>
);
