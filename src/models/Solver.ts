import { UserConfig } from "./Config";

export type SolverStatus =
  | "INITIALIZED"
  | "RUNNING"
  | "COMPLETED"
  | "STOPPED"
  | "FAILED";

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

export type SolverV2 = {
  id: string;
  name: string;
  status: SolverStatus;
  userConfig: UserConfig;
  createdAtTimestamp: string;
  terminatedAtTimestamp: string;
  logFileName: string;
  numSchFileName: string;
  strSchFileName: string;
};
