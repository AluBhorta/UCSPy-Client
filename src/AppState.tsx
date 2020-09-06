import React, { createContext, useState } from "react";
import { Solver } from "./models/Solver";
import { UserConfig } from "./models/Config";
import { getUUID } from "./util/Util";

export enum dataPageNames {
  "schedule-params" = 0,
  "logs" = 1,
  "schedules" = 2,
}

export const AppContext = createContext<{
  createNewSolver: (_config: UserConfig) => Solver;
  getSolver: (id: string) => Solver | undefined;
  getAllSolvers: () => Solver[];
  deleteSolver: (id: string) => void;
}>({
  createNewSolver: (_config: UserConfig) => new Solver("0", _config),
  getSolver: (id: string) => undefined,
  getAllSolvers: () => [],
  deleteSolver: (id: string) => {},
});

const AppState: React.FC = ({ children }) => {
  const [solvers, setSolvers] = useState<Solver[]>([]);

  const createNewSolver = (_config: UserConfig) => {
    const id = getUUID();
    const solver = new Solver(id, _config);
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
      <AppContext.Provider value={{
        createNewSolver,
        getSolver,
        getAllSolvers,
        deleteSolver,
      }}>{children}</AppContext.Provider>
    </>
  );
};

export default AppState;
