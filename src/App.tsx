import React from "react";

import "./App.css";
import AppRoutes from "./AppRoutes";
import AppState from "./AppState";

import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <AppState>
        <AppRoutes>
          <AppHeader />
        </AppRoutes>
      </AppState>
    </div>
  );
}

export default App;
