import React, { useState } from "react";
import { Button, LinearProgress } from "@material-ui/core";

const SolveRunPage: React.FC = () => {
  const [currentEpoch, setCurrentEpoch] = useState(10);
  const [currentFitness, setCurrentFitness] = useState(0.8);

  return (
    <div>
      <h1>SolveRunPage</h1>

      <LinearProgress variant="indeterminate" value={currentEpoch} />
      <p>Current epoch: {currentEpoch}</p>
      <p>Current Fitness: {currentFitness}</p>

      <Button variant="contained" color="secondary" size="large">
        STOP!
      </Button>
    </div>
  );
};

export default SolveRunPage;
