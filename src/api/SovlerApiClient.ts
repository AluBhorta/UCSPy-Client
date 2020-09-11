import io from "socket.io-client";
import { SolverT } from "../models/Solver";

export default class SolverApiClient {
  socket: SocketIOClient.Socket;

  constructor(API_URL = "http://127.0.0.1:1234/") {
    this.socket = io(API_URL);

    this.socket.on("connect", () => {
      console.log("connected");
    });

    this.socket.on("disconnect", () => {
      console.log("disconnected");
    });

    this.socket.on("message", (data: any) => {
      console.log("message", data);
    });

    this.socket.on("progress", (data: any) => {
      console.log("progress", JSON.parse(data));
    });
  }

  // runSolver(config) -> id/channel/socket
  runSolver = (solver: SolverT) => {
    this.socket.emit("solve", JSON.stringify(solver));
  };

  // stopSolver(id) -> SolverResult {schedule, log}
  stopSolver = (id: string) => {
    this.socket.emit("stop", id);
  };

  close = () => {
    const s= this.socket.close();
  };
}
