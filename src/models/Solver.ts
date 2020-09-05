import { UserConfig } from "./Config";

export type SolverStatus = "RUNNING" | "STOPPED";

export class Solver {
  private status: SolverStatus = "STOPPED";
  private id: string;
  private userConfig: UserConfig;

  constructor(id: string, _config: UserConfig) {
    this.id = id;
    this.userConfig = _config;
  }

  getId = () => this.id;
  getStatus = () => this.status;
  getConfig = () => this.userConfig;

  solve = (_config?: UserConfig) => {
    this.status = "RUNNING";
    console.log("running...");
    setTimeout(() => {
      console.log("simulating end of run...");
      this.status = "STOPPED";
    }, 1500);
    /* TODO
    open connection to engine and send userConfig
    keep receiving progress {epoch, fitness}
    on 'complete' return: {fitness, scheduleName, logName, timeTaken}
    */
  };

  stop = () => {
    console.log("stopping...");
    setTimeout(() => {
      console.log("simulating stop...");
      this.status = "STOPPED";
    }, 1500);
    // TODO
    // on 'stop', send kill signal and return: {fitness, scheduleName, logName, timeTaken}
  };
}
