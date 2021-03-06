import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ViewListIcon from '@material-ui/icons/ViewList';

const HomePage: React.FC = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Home</h1>

      <Grid container justify="space-evenly">
        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => history.push("/solve/config")}
            startIcon={<AddCircleIcon />}
          >
            New Solver
          </Button>
        </Grid>
        <Grid item>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => history.push("/solvers")}
            startIcon={<ViewListIcon />}
          >
            All Solvers
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
