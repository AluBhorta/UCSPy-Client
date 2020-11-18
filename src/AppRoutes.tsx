import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlotPage from "./pages/PlotPage";
import InspectPage from "./pages/InspectPage";
import SolveConfigPage from "./pages/SolveConfigPage";
import SolveDetailPage from "./pages/SolveDetailPage";
import Error404Page from "./pages/Error404Page";
import AllSolversPage from "./pages/AllSolversPage";

const AppRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/solvers" exact>
          <AllSolversPage />
        </Route>
        <Route path="/solve/config" exact>
          <SolveConfigPage />
        </Route>
        <Route path="/solve/detail/:id" exact>
          {({ match }) => <SolveDetailPage id={match?.params.id} />}
        </Route>

        <Route path="/plot/:logFileName" exact>
          {({ match }) => <PlotPage logFileName={match?.params.logFileName} />}
        </Route>

        <Route path="/inspect/:scheduleFileName" exact>
          {({ match }) => (
            <InspectPage scheduleFileName={match?.params.scheduleFileName} />
          )}
        </Route>

        <Route path="*">
          <Error404Page />
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
