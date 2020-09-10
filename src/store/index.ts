import { configureStore } from "@reduxjs/toolkit";
import solverReducer from "./slices/SolverSlice";

export default configureStore({
  reducer: {
    solver: solverReducer,
  },
});
