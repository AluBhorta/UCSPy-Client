import React, { createContext, useState } from "react";
import { Solver } from "./models/Solver";
import { UserConfig } from "./models/Config";
import { getUUID } from "./util/Util";

export const AppContext = createContext<{
  runNewSolver: (_config: UserConfig) => Solver;
  getSolver: (id: string) => Solver | undefined;
  getAllSolvers: () => Solver[];
  deleteSolver: (id: string) => void;
}>({
  runNewSolver: (_config: UserConfig) => new Solver("0", _config),
  getSolver: (id: string) => undefined,
  getAllSolvers: () => [],
  deleteSolver: (id: string) => {},
});

const AppState: React.FC = ({ children }) => {
  const [solvers, setSolvers] = useState<Solver[]>([]);

  const runNewSolver = (_config: UserConfig) => {
    const id = getUUID();
    const solver = new Solver(id, _config);

    // const solver: SolverT = {
    //   id,
    //   status: "INITIALIZED",
    //   userConfig: _config,
    //   terminationResult: null
    // }

    setSolvers([...solvers, solver]);
    return solver;
  };

  const getSolver = (id: string) => {
    return solvers.find((s) => s.getId() === id);
  };

  const getAllSolvers = () => solvers;

  const deleteSolver = (id: string) => {
    const _solvers = solvers.filter((s) => s.getId() !== id);
    setSolvers(_solvers);
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
