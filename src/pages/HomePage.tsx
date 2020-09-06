import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Grid container justify="space-evenly">
        <Grid item>
          <Link to="/solve/config">
            <Button variant="contained" color="primary">
              Solve
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/data/logs">
            <Button variant="contained" color="primary">
              Plot
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/inspect">
            <Button variant="contained" color="primary">
              Inspect
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
