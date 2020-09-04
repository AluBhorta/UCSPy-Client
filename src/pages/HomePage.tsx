import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Grid container justify="space-evenly">
        <Grid item>
          <Link to="/solve/config"> Solve </Link>
        </Grid>
        <Grid item>
          <Link to="/data/logs"> Plot </Link>
        </Grid>
        <Grid item>
          <Link to="/inspect"> Inspect </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
