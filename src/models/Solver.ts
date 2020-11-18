import { UserConfig } from "./Config";

export type SolverStatus = "INITIALIZED" | "RUNNING" | "TERMINATED";

export type SolverProgressUpdate = {
  id: string;
  epoch: string;
  fitness: number;
};

export type SolverTerminationResult = {
  id: string;
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
