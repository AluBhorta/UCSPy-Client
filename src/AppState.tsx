import React, { createContext, useEffect, useState } from "react";

import { SolverV2 } from "./models/Solver";
import { UserConfig } from "./models/Config";
import { getUUID } from "./util/Util";
import SolverApiClient from "./api/SovlerApiClient";

interface IAppContext {
  runNewSolver: (_config: UserConfig, solverName: string) => Promise<SolverV2>;
  getSolver: (id: string) => SolverV2 | undefined;
  getAllSolvers: () => SolverV2[];
  stopSolver: (id: string) => void;
}

export const AppContext = createContext<IAppContext>({
  runNewSolver: (_config: UserConfig, solverName: string) => Promise.reject(),
  getSolver: (id: string) => undefined,
  getAllSolvers: () => [],
  stopSolver: (id: string) => {},
});

const AppState: React.FC = ({ children }) => {
  const [solverV2s, setSolverV2s] = useState<SolverV2[]>([]);

  // ws event handlers

  const onStarted = (solver: SolverV2) => {
    setSolverV2s((_solvers) =>
      _solvers.map((s) =>
        s.id === solver.id ? { ...solver, status: "RUNNING" } : s
      )
    );
    console.log(`Started: ${solver.id}`);
  };

  const onCompleted = (solver: SolverV2) => {
    setSolverV2s((_solvers) =>
      _solvers.map((s) =>
        s.id === solver.id ? { ...solver, status: "COMPLETED" } : s
      )
    );
    console.log(`Completed: ${solver}`);
  };

  const onStopped = (solver: SolverV2) => {
    setSolverV2s((_solvers) =>
      _solvers.map((s) =>
        s.id === solver.id ? { ...solver, status: "STOPPED" } : s
      )
    );
    console.log(`Stopped: ${solver}`);
  };

  const onFailed = (solver: SolverV2) => {
    setSolverV2s((_solvers) =>
      solverV2s.map((s) =>
        s.id === solver.id ? { ...solver, status: "FAILED" } : s
      )
    );
    console.log(`Failed: ${solver}`);
  };

  const onProgress = (progress: string) => {
    console.log(`Progress! ${JSON.stringify(progress)}`);
  };

  const solverApiClient = new SolverApiClient({
    onStarted,
    onCompleted,
    onStopped,
    onFailed,
    onProgress,
  });

  useEffect(() => {
    return () => {
      solverApiClient.close();
    };
  }, []);

  // AppContext attrs
  const runNewSolver = async (_config: UserConfig, solverName: string) => {
    const id = getUUID();
    const solver: SolverV2 = {
      id,
      status: "INITIALIZED",
      userConfig: _config,
      name: solverName,
      createdAtTimestamp: Date.now().toString(),
      terminatedAtTimestamp: "",
      logFileName: "",
      numSchFileName: "",
      strSchFileName: "",
    };

    await solverApiClient.runSolver(solver, () => {
      console.log(`Requested to run solver: ${id}`);
    });

    // TODO: remove mock async
    setTimeout(() => {
      onStarted(solver);
    }, 2000);

    setSolverV2s([...solverV2s, solver]);
    return solver;
  };

  const getSolver = (id: string) => {
    return solverV2s.find((s) => s.id === id);
  };

  const getAllSolvers = () => solverV2s;

  const stopSolver = async (id: string) => {
    await solverApiClient.stopSolver(id, () => {
      console.log(`Stop request sent for ${id}`);
    });

    // TODO: remove mock async
    setTimeout(() => {
      const solver = solverV2s.find((s) => s.id === id);
      if (solver) onStopped(solver);
    }, 1000);
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
