import React, { createContext, useState } from "react";
import { SolverT } from "./models/Solver";
import { UserConfig } from "./models/Config";
import { getUUID } from "./util/Util";
import SolverApiClient from "./api/SovlerApiClient";

export const AppContext = createContext<{
  runNewSolver: (_config: UserConfig) => SolverT;
  getSolver: (id: string) => SolverT | undefined;
  getAllSolvers: () => SolverT[];
  deleteSolver: (id: string) => void;
}>({
  runNewSolver: (_config: UserConfig) => ({
    id: "0",
    status: "INITIALIZED",
    userConfig: _config,
  }),
  getSolver: (id: string) => undefined,
  getAllSolvers: () => [],
  deleteSolver: (id: string) => {},
});

const AppState: React.FC = ({ children }) => {
  const [solverTs, setSolverTs] = useState<SolverT[]>([]);
  const solverApiClient = new SolverApiClient();

  const runNewSolver = (_config: UserConfig) => {
    const id = getUUID();
    const solver: SolverT = {
      id,
      status: "INITIALIZED",
      userConfig: _config,
    };

    solverApiClient.runSolver(solver);

    setSolverTs([...solverTs, solver]);

    return solver;
  };

  const getSolver = (id: string) => {
    return solverTs.find((s) => s.id === id);
  };

  const getAllSolvers = () => solverTs;

  const deleteSolver = (id: string) => {
    // const _solvers = solvers.filter((s) => s.getId() !== id);
    // setSolvers(_solvers);
    throw new Error("ERROR! Not yet implemented!");    
  };

  return (
    <>
      <AppContext.Provider
        value={{
          runNewSolver,
          getSolver,
          getAllSolvers,
          deleteSolver,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppState;
