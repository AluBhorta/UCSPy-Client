import { createSlice, nanoid } from "@reduxjs/toolkit";
import { SolverT } from "../../models/Solver";
import { UserConfig } from "../../models/Config";
import { StateT } from "../../models/State";

const initialState: StateT = {
  solvers: [],
};

export const solverSlice = createSlice({
  name: "solver",
  initialState,
  reducers: {
    runNewSolver: (state, action) => {
      const _config: UserConfig = action.payload;
      const id = nanoid();
      const newSolver: SolverT = {
        id,
        status: "INITIALIZED",
        userConfig: _config,
        terminationResult: null,
      };
      state.solvers.push(newSolver);

      // submit config to apiClient
    },
    stopSolver: (state, action) => {
      // const id: string = action.payload
      //
    },
  },
});

export default solverSlice.reducer;

export const selectSolvers = (state: StateT) => state.solvers;
