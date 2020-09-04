import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlotPage from "./pages/PlotPage";
import InspectPage from "./pages/InspectPage";
import SolveConfigPage from "./pages/SolveConfigPage";
import DataRootPage from "./pages/DataRootPage";
import SolveRunPage from "./pages/SolveRunPage";
import Error404Page from "./pages/Error404Page";
import DataDetailPage from "./pages/DataDetailPage";

const AppRoutes: React.FC = () => {
  return (
    <>
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
          <Redirect to="/data/logs" />
        </Route>

        <Route path="/plot/:logFileName" exact>
          {({ match }) => <PlotPage logFileName={match?.params.logFileName} />}
        </Route>

        <Route path="/inspect" exact>
          <InspectPage />
        </Route>

        <Route path="/data" exact>
          <DataRootPage />
        </Route>
        <Route path="/data/:pageName" exact>
          {({ match }) =>
            ["schedule-params", "logs", "schedules"].includes(
              match?.params.pageName
            ) ? (
              <DataDetailPage pageName={match?.params.pageName} />
            ) : (
              <Error404Page />
            )
          }
        </Route>

        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
