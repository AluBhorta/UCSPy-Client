import React, { createContext } from "react";
import { Solver } from "./models/Solver";

const AppContext = createContext({
  solver: new Solver(),
});

const AppState: React.FC = ({ children }) => {
  const appSolver: Solver = new Solver();

  return (
    <>
      <AppContext.Provider value={{ solver: appSolver }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppState;
