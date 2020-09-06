import React from "react";
import {
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  Box,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box marginRight={6}>
            <h2>UCSPy</h2>
          </Box>

          <ButtonGroup variant="contained" color="primary">
            <Link to="/">
              <Button style={{ color: "#fff" }}>Home</Button>
            </Link>
            <Link to="/data">
              <Button style={{ color: "#fff" }}>Data</Button>
            </Link>
            <Link to="/solvers">
              <Button style={{ color: "#fff" }}>Solvers</Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
