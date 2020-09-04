# UCSPy-Client

Client Web App for UCSPy-Engine.

## Usage

...

## Requirements

#### data

sch_params

- listView() == /data/schedule-params

  - show list of: sch_params_names, solveBtn/UseToSolveBtn,
  - show uploadBtn

- upload()

  - open modal
  - enter sch_params_name
  - upload the files (C, I, R, T, CG)
  - click save

- ~download(sch_param_name) -> return
- ~delete()

logs

- listView() -> /data/logs

  - show list of: logNames, plotBtn
  - show uploadBtn

- plot(log_file)

  - get log_file from /plot?log=log_file

- ~upload()
- ~download(log_name) -> return log_name
- ~delete()

schedules

- listView() -> /data/schedules
- inspect(schedule_name) -> /inspect?schedule=schedule_name
- download(schedule_name) -> return schedule_name

- ~upload()
- ~delete()

### solve

makeConfig()
- returns a UserConfig


solve()

- run Solver.solve(\_config)
- send UserConfig to SERVER:PORT/api/solve

stop()
- run Solver.stop()

### plot

### inspect
