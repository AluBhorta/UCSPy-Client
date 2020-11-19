import io from "socket.io-client";

import { ConfigDescription } from "../models/Config";
import { SolverV2 } from "../models/Solver";
import { mockConfigDescription } from "./MockData";

interface ApiClientArgs {
  onProgress?: CallableFunction;
  onCompleted?: CallableFunction;
  onStopped?: CallableFunction;
  onFailed?: CallableFunction;
  onStarted?: CallableFunction;
}

export default class SolverApiClient {
  socket: SocketIOClient.Socket;
  API_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:1234/";

  constructor(apiClietArgs?: ApiClientArgs) {
    // TODO: set autoConnect to True
    this.socket = io(this.API_URL, { autoConnect: false });

    if (apiClietArgs) {
      const {
        onStarted,
        onCompleted,
        onStopped,
        onFailed,
        onProgress,
      } = apiClietArgs;

      this.socket.on("started", (result: SolverV2) => {
        if (onStarted) onStarted(result);
      });

      this.socket.on("completed", (result: SolverV2) => {
        if (onCompleted) onCompleted(result);
      });

      this.socket.on("stopped", (result: SolverV2) => {
        if (onStopped) onStopped(result);
      });

      this.socket.on("failed", (result: SolverV2) => {
        if (onFailed) onFailed(result);
      });

      this.socket.on("progress", (progress: any) => {
        if (onProgress) onProgress(progress);
      });
    }
  }

  close = () => {
    this.socket.close();
  };

  runSolver = (solver: SolverV2, cb?: CallableFunction) => {
    this.socket.emit("solve", JSON.stringify(solver), cb);
  };

  stopSolver = (id: string, cb?: CallableFunction) => {
    this.socket.emit("stop", id, cb);
  };

  getConfigDescription = async () => {
    return new Promise<ConfigDescription>((resolve, reject) => {
      // // TODO: replace mock
      setTimeout(() => {
        resolve(mockConfigDescription);
      }, 100);

      // this.socket.emit(
      //   "get:configDescription",
      //   null,
      //   (confDesc: ConfigDescription) => resolve(confDesc)
      // );
    });
  };
}
