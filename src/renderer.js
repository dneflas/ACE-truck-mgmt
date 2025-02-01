import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import { HashRouter } from "react-router-dom";
import App from "./app.jsx"; // Import your main React component
import "./index.css"; // Import your global styles

// Get the root div where React will attach
const root = document.getElementById("root");

// Render the React app into the DOM
const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
