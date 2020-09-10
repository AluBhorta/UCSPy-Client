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
} | null;

export type SolverT = {
  status: SolverStatus;
  id: string;
  userConfig: UserConfig;
  terminationResult: SolverTerminationResult;
};

export class Solver {
  private status: SolverStatus;
  private id: string;
  private userConfig: UserConfig;

  constructor(id: string, _config: UserConfig) {
    this.id = id;
    this.userConfig = _config;
    this.status = "INITIALIZED";
  }

  getId = () => this.id;
  getStatus = () => this.status;
  getConfig = () => this.userConfig;

  solve = () => {
    this.status = "RUNNING";
    console.log("running...");
    setTimeout(() => {
      console.log("simulating end of run...");
      this.status = "TERMINATED";
    }, 5000);
    /* TODO
    open connection to engine and send userConfig
    keep receiving `SolverProgressUpdate`
    on 'complete' return `SolverTerminationResult`
    */
  };

  stop = () => {
    console.log("stopping...");
    setTimeout(() => {
      console.log("completing stop...");
      this.status = "TERMINATED";
    }, 1500);
    // TODO
    // on 'stop', send kill signal and return: {fitness, scheduleName, logName, timeTaken}
  };
}
