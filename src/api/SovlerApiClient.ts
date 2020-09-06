export default class SolverApiClient {
  // runSolver(config) -> id/channel/socket
  runSolver = () => {};

  // onSolverRunningUpdate(id) -> SolverProgressUpdate
  onSolverProgressUpdate = () => {};

  // stopSolver(id) -> SolverResult {schedule, log}
  stopSolver = () => {};
}
