import React, { useState, useContext, useEffect } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { AppContext } from "../AppState";
import Error404Page from "./Error404Page";
import { SolverT } from "../models/Solver";

const SolveRunPage: React.FC<{ id: string }> = ({ id }) => {
  const { getSolver } = useContext(AppContext);
  const [currentEpoch, setCurrentEpoch] = useState(10);
  const [currentFitness, setCurrentFitness] = useState(0.8);

  const [solver, setSolver] = useState<SolverT | undefined>(undefined);

  useEffect(() => {
    setSolver(getSolver(id));
    return () => {};
  }, [id]);

  if (solver === undefined) {
    return <Error404Page message={`No Solver found with id: ${id}`} />;
  }

  return (
    <div>
      <h1>{solver.status} </h1>
      <p>Solver id: {id}</p>

      <LinearProgress variant="indeterminate" value={currentEpoch + 1} />
      <p>Current epoch: {currentEpoch}</p>
      <p>Current Fitness: {currentFitness}</p>

      <Button variant="contained" color="secondary" size="large">
        STOP!
      </Button>
    </div>
  );
};

export default SolveRunPage;
