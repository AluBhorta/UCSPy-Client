import { UserConfig } from "./Config";

export type SolverStatus =
  | "INITIALIZED"
  | "RUNNING"
  | "COMPLETED"
  | "STOPPED"
  | "FAILED";

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

export type SolverProgressUpdate = {
  id: string;
  epoch: string;
  fitness: number;
};
