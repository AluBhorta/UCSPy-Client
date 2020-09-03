# UCSPy-Client

Client Web App for UCSPy-Engine.

## Usage

...

## Requirements

#### data

- sch_params

  - listView() -> /data/schedule-params
  - upload(file: C, I, R, T, CG) -> save_sch_params(C, I, R, T, CG)
  - solve(sch_param_name) -> /solve?sch_param=sch_param_name

  - ~download(sch_param_name) -> return (file: C, I, R, T, CG)
  - ~delete()

- logs

  - listView() -> /data/logs
  - plot(log_file) -> /plot?log=log_file

  - ~upload()
  - ~download(log_name) -> return log_name
  - ~delete()

- schedules

  - listView() -> /data/schedules
  - inspect(schedule_name) -> /inspect?schedule=schedule_name
  - download(schedule_name) -> return schedule_name

  - ~upload()
  - ~delete()

### solve

makeConfig(): -> returns a UserConfig

- actions:
  - Solver.solve()
  - Solver.stop()

  
### plot

### inspect
