import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure this file exists for global styles
// import ExpenseTracker from "./App"; // Import the ExpenseTracker component
import CountryFlags from "./CountryFlags";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryFlags/>
  </React.StrictMode>
);
