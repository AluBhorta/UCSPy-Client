import React from "react";

import "./App.css";
import AppRoutes from "./AppRoutes";
import AppState from "./AppState";
import { BrowserRouter as Router } from "react-router-dom";

import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

function App() {
  return (
    <div className="App">
      <AppState>
        <Router>
          <AppHeader />
          <AppBody>
            <AppRoutes />
          </AppBody>
        </Router>
      </AppState>
    </div>
  );
}

export default App;
