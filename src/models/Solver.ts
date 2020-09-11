import { UserConfig } from "./Config";

export type SolverStatus = "INITIALIZED" | "RUNNING" | "TERMINATED";

export type SolverProgressUpdate = {
  epoch: string;
  fitness: number;
};

export type SolverTerminationResult = {
  timeTakenInSeconds: number;
  finalFitness: number;
  finalEpoch: number;
  scheduleFileName: string;
  logFileName: string;
};

export type SolverT = {
  id: string;
  userConfig: UserConfig;
  status: SolverStatus;
};
