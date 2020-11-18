import React, { createContext, useState } from "react";
import { SolverT, SolverTerminationResult } from "./models/Solver";
import { UserConfig } from "./models/Config";
import { getUUID } from "./util/Util";
import SolverApiClient from "./api/SovlerApiClient";

interface IAppContext {
  runNewSolver: (_config: UserConfig) => Promise<SolverT>;
  getSolver: (id: string) => SolverT | undefined;
  getAllSolvers: () => SolverT[];
  stopSolver: (id: string) => void;
}

export const AppContext = createContext<IAppContext>({
  runNewSolver: (_config: UserConfig) =>
    Promise.reject({
      id: "0",
      status: "INITIALIZED",
      userConfig: _config,
    }),
  getSolver: (id: string) => undefined,
  getAllSolvers: () => [],
  stopSolver: (id: string) => {},
});

const AppState: React.FC = ({ children }) => {
  const [solverTs, setSolverTs] = useState<SolverT[]>([]);

  // ws event handlers
  const onProgress = (progress: string) => {
    // console.log(`Progress! ${progress}`);
    console.log(`Progress! ${JSON.stringify(progress)}`);
    // console.log(`Progress! ${JSON.parse(progress)}`);
  };

  const onCompleted = (result: SolverTerminationResult) => {
    const newSolvers: SolverT[] = solverTs.map((s) =>
      s.id === result.id ? { ...s, status: "TERMINATED" } : s
    );
    setSolverTs(newSolvers);
    console.log(`Completed: ${result}`);
  };

  const onStopped = (result: SolverTerminationResult) => {
    const newSolvers: SolverT[] = solverTs.map((s) =>
      s.id === result.id ? { ...s, status: "TERMINATED" } : s
    );
    setSolverTs(newSolvers);
    console.log(`Stopped: ${result}`);
  };

  const solverApiClient = new SolverApiClient(
    onProgress,
    onCompleted,
    onStopped
  );

  // context properties
  const runNewSolver = async (_config: UserConfig) => {
    const id = getUUID();
    const solver: SolverT = {
      id,
      status: "INITIALIZED",
      userConfig: _config,
    };

    await solverApiClient.runSolver(solver, () => {
      console.log(`Successfully running solver id: ${id}`);
    });
    solver.status = "RUNNING";
    setSolverTs([...solverTs, solver]);

    return solver;
  };

  const getSolver = (id: string) => {
    return solverTs.find((s) => s.id === id);
  };

  const getAllSolvers = () => solverTs;

  const stopSolver = async (id: string) => {
    await solverApiClient.stopSolver(id, () => {
      console.log(`Stop request sent for ${id}`);
    });

    // mock
    setTimeout(() => {
      const newSolvers: SolverT[] = solverTs.map((s) =>
        s.id === id ? { ...s, status: "TERMINATED" } : s
      );
      setSolverTs(newSolvers);
    }, 2000);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          runNewSolver,
          getSolver,
          getAllSolvers,
          stopSolver,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppState;
