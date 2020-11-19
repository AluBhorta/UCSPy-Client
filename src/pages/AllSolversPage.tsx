import React, { useContext } from "react";
import { AppContext } from "../AppState";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";

const AllSolversPage: React.FC = () => {
  const { getAllSolvers } = useContext(AppContext);
  const solvers = getAllSolvers();
  return (
    <div>
      <h1>All Solvers</h1>

      {solvers.length < 1 ? (
        <>
          <h3>No Solvers found!</h3>
          <p>
            Go to <Link to="/solve/config">solve</Link> to configure and run a
            new solver.
          </p>
        </>
      ) : (
        <>
          <List>
            <ListItem>
              <ListItemText>STATUS</ListItemText>
              <ListItemText>Solver ID</ListItemText>
            </ListItem>
            {solvers.map((solver, idx) => (
              <Link key={idx} to={`/solve/detail/${solver.id}`}>
                <ListItem button>
                  <ListItemText>{solver.status}</ListItemText>
                  <ListItemText>{solver.id}</ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default AllSolversPage;
