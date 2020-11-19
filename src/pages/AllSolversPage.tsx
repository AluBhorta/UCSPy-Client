import React, { useContext } from "react";
import { AppContext } from "../AppState";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const AllSolversPage: React.FC = () => {
  const { getAllSolvers } = useContext(AppContext);
  const solvers = getAllSolvers();
  const history = useHistory();
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
              <ListItemText>
                <span className="bold-font">Name</span>
              </ListItemText>
              <ListItemText>
                <span className="bold-font">STATUS</span>
              </ListItemText>
              <ListItemText>
                <span className="bold-font">Created At</span>
              </ListItemText>
            </ListItem>
            <Divider />
            {solvers.map((solver, idx) => (
              <ListItem
                key={idx}
                button
                onClick={(e) => history.push(`/solve/detail/${solver.id}`)}
              >
                <ListItemText>{solver.name}</ListItemText>
                <ListItemText>{solver.status}</ListItemText>
                <ListItemText>
                  {new Date(+solver.createdAtTimestamp).toLocaleString()}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </div>
  );
};

export default AllSolversPage;
