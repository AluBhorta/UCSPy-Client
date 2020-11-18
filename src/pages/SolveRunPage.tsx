import React, { useState, useContext, useEffect } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { AppContext } from "../AppState";
import Error404Page from "./Error404Page";
import { SolverT } from "../models/Solver";

const SolveRunPage: React.FC<{ id: string }> = ({ id }) => {
  const { getSolver, stopSolver } = useContext(AppContext);
  const [solver, setSolver] = useState<SolverT | undefined>(undefined);

  const [currentEpoch, setCurrentEpoch] = useState(10);
  const [currentFitness, setCurrentFitness] = useState(0.8);

  const [solverStatus, setSolverStatus] = useState(solver?.status);

  useEffect(() => {
    const _s = getSolver(id);
    setSolver(_s);
    setSolverStatus(_s?.status);
    return () => {};
  }, [id, getSolver, solverStatus]);

  if (!solver) {
    return <Error404Page message={`No Solver found with id: ${id}`} />;
  }

  return (
    <div>
      <h1>{solverStatus} </h1>
      <p>Solver id: {id}</p>

      <LinearProgress
        variant={solverStatus === "RUNNING" ? "indeterminate" : "determinate"}
        value={0}
      />
      <p>Current epoch: {currentEpoch}</p>
      <p>Current Fitness: {currentFitness}</p>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          stopSolver(id);
        }}
      >
        STOP!
      </Button>
    </div>
  );
};

export default SolveRunPage;
