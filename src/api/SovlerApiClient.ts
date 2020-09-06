export default class SolverApiClient {
  // runSolver(config) -> id/channel/socket
  runSolver = () => {};

  // onSolverRunningUpdate(id) -> {epoch, fitness, status <running | terminated>}
  onSolverRunningUpdate = () => {};

  // stopSolver(id) -> SolverResult {schedule, log}
  stopSolver = () => {};
}
