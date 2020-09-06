import React, { useContext } from "react";
import { AppContext } from "../AppState";
import {
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const AllSolversPage: React.FC = () => {
  const { getAllSolvers } = useContext(AppContext);
  const solvers = getAllSolvers();
  return (
    <div>
      <h1>All Solvers</h1>

      <List>
        <ListItem>
          <ListItemText>STATUS</ListItemText>
          <ListItemText>Solver ID</ListItemText>
        </ListItem>
        {solvers.map((solver, idx) => (
          <Link key={idx} to={`/solve/run/${solver.getId()}`}>
            <ListItem button>
              <ListItemText>{solver.getStatus()}</ListItemText>
              <ListItemText>{solver.getId()}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default AllSolversPage;
