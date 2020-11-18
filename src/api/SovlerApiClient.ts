import io from "socket.io-client";
import { SolverT, SolverTerminationResult } from "../models/Solver";

export default class SolverApiClient {
  socket: SocketIOClient.Socket;
  API_URL = process.env.REACT_APP_API_BASE_URL || "http://127.0.0.1:1234/";

  constructor(
    onProgress?: CallableFunction,
    onCompleted?: CallableFunction,
    onStopped?: CallableFunction
  ) {
    this.socket = io(this.API_URL, { autoConnect: false });

    this.socket.on("progress", (progress: string) => {
      if (onProgress) {
        onProgress(progress);
      }
    });

    this.socket.on("completed", (result: SolverTerminationResult) => {
      if (onCompleted) {
        onCompleted(result);
      }
    });

    this.socket.on("stopped", (result: SolverTerminationResult) => {
      if (onStopped) {
        onStopped(result);
      }
    });
  }

  runSolver = (solver: SolverT, cb?: CallableFunction) => {
    this.socket.emit("solve", JSON.stringify(solver), cb);
  };

  stopSolver = (id: string, cb?: CallableFunction) => {
    this.socket.emit("stop", id, cb);
  };

  close = () => {
    this.socket.close();
  };
}
