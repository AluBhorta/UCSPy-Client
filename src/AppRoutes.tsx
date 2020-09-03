import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlotPage from "./pages/PlotPage";
import InspectPage from "./pages/InspectPage";
import SolveConfigPage from "./pages/SolveConfigPage";
import DataRootPage from "./pages/DataRootPage";
import SolveRunPage from "./pages/SolveRunPage";
import Error404Page from "./pages/Error404Page";

const AppRoutes: React.FC = ({ children }) => {
  return (
    <div>
      <Router>
        {children}

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/solve/config" exact>
            <SolveConfigPage />
          </Route>
          <Route path="/solve/run" exact>
            <SolveRunPage />
          </Route>
          <Route path="/plot" exact>
            <PlotPage />
          </Route>
          <Route path="/inspect" exact>
            <InspectPage />
          </Route>
          <Route path="/data" exact>
            <DataRootPage />
          </Route>
          <Route path="*">
            <Error404Page />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRoutes;
