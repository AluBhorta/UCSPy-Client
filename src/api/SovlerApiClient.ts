import io from "socket.io-client";
import { UserConfig } from "../models/Config";

export default class SolverApiClient {
  socket = io("http://127.0.0.1:1234/");

  constructor() {
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
  runSolver = (userConfig: UserConfig) => {
    this.socket.emit("solve", JSON.stringify(userConfig));
  };

  // stopSolver(id) -> SolverResult {schedule, log}
  stopSolver = (id: string) => {
    this.socket.emit("stop", id);
  };
}
