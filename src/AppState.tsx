import React, { createContext } from "react";
import { Solver } from "./models/Solver";

const AppContext = createContext({
  solver: new Solver(),
});

export enum dataPageNames {
  "schedule-params" = 0,
  "logs" = 1,
  "schedules" = 2,
}

const AppState: React.FC = ({ children }) => {
  const appSolver = new Solver();

  return (
    <>
      <AppContext.Provider value={{ solver: appSolver }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppState;
