import React from "react";
import { Button, ButtonGroup, AppBar, Toolbar, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const AppHeader: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box style={{ flex: 1 }}>
            <Button
              variant="text"
              style={{ color: "#fff" }}
              onClick={() => history.push("/")}
            >
              <h2>UCSPy Client</h2>
            </Button>
          </Box>

          <ButtonGroup variant="contained" color="primary">
            <Button onClick={() => history.push("/")} style={{ color: "#fff" }}>
              <HomeIcon />
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
