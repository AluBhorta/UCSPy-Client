import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Grid container justify="space-evenly">
        <Grid item>
          <Button href="/solve/config" variant="contained" color="primary">
            Solve
          </Button>
        </Grid>
        <Grid item>
          <Button href="/data/logs" variant="contained" color="primary">
            Plot
          </Button>
        </Grid>
        <Grid item>
          <Button href="/inspect" variant="contained" color="primary">
            Inspect
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
