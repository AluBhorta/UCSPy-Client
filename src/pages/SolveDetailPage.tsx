import React, { useState, useContext, useEffect } from "react";
import { Box, Button, Grid, LinearProgress } from "@material-ui/core";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PanToolIcon from "@material-ui/icons/PanTool";
import { useHistory } from "react-router-dom";

import { AppContext } from "../AppState";
import Error404Page from "./Error404Page";
import { SolverT } from "../models/Solver";

const SolveDetailPage: React.FC<{ id: string }> = ({ id }) => {
  const { getSolver, stopSolver } = useContext(AppContext);
  const history = useHistory();
  const [solver, setSolver] = useState<SolverT | undefined>(undefined);

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
      <h1>Solver id: {id}</h1>
      <p>STATUS: {solverStatus}</p>

      <LinearProgress
        variant={solverStatus === "RUNNING" ? "indeterminate" : "determinate"}
        value={0}
      />

      <Box m={2}>
        {solverStatus === "RUNNING" && (
          <div className="text-center">
            <Button
              variant="contained"
              style={{ backgroundColor: "#d95347" }}
              size="large"
              onClick={() => {
                stopSolver(id);
              }}
              startIcon={<PanToolIcon />}
            >
              STOP!
            </Button>
          </div>
        )}

        {solverStatus === "TERMINATED" && (
          <>
            <Grid container justify="space-evenly">
              <Grid item>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() => history.push("/plot/example.log")}
                  startIcon={<ShowChartIcon />}
                >
                  <span>Plot</span>
                </Button>
              </Grid>

              <Grid item>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  onClick={() => history.push("/inspect/example.csv")}
                  startIcon={<VisibilityIcon />}
                >
                  <span>Inspect</span>
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </div>
  );
};

export default SolveDetailPage;
