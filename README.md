# UCSPy-Client

Client Web App for UCSPy-Engine.

## Usage

TODO

## Requirements

#### data

- sch_params
- logs
- schedules

### solve

#### `/solve/config`

makeConfig()

- return a UserConfig

solve()

- run Solver.solve(userConfig)
  - which sends UserConfig to `SERVER:PORT/api/solve`
- redirect to `/solve/run`

#### `/solve/run`

updateProgress()

- on message sent from server: {epoch, fitness}
- update progress bar (epoch) value and fitness value according to message

stop()

- on stop click from UI, send kill signal to server

end()

- on successful end of sovle()

NOTE:

- need to allow user to navigate thru app while a solver is runnning
- so, when a solver is running, save its state
- allow mutiple solvers to run
  - e.g. by making multiple instances of Solver and keeping them in an array

### plot

### inspect
