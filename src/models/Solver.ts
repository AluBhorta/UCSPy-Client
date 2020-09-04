import { UserConfig } from "./Config";

export type SolverStatus = "RUNNING" | "STOPPED";

export class Solver {
  private status: SolverStatus = "STOPPED";

  private userConfig: UserConfig = {
    scheduleParamName: "",
    constrinats: {
      hardConstraints: [],
      softConstraints: [],
    },
    fitness: {
      use: "",
      minAcceptableFitness: 0,
    },
    algorithm: "",
  };

  getStatus = () => this.status;

  getConfig = () => this.userConfig;

  solve = (_config?: UserConfig) => {
    this.status = "RUNNING";
    /* TODO
    open connection to engine and send userConfig
    keep receiving progress {epoch, fitness}
    on 'complete' return: {fitness, scheduleName, logName, timeTaken}
    */
    this.status = "STOPPED";
  };

  stop = () => {
    this.status = "STOPPED";
    // TODO
    // on 'stop', send kill signal and return: {fitness, scheduleName, logName, timeTaken}
  };
}

const s = new Solver();

s.solve();
