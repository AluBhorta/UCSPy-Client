import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const DataRootPage: React.FC = () => {
  return (
    <div>
      <h1>Data</h1>

      <List>
        <ListItem>
          <Link to="/data/schedule-params">Schedule Params</Link>
        </ListItem>
        <ListItem>
          <Link to="/data/logs">Logs</Link>
        </ListItem>
        <ListItem>
          <Link to="/data/schedules">Schedules</Link>
        </ListItem>
      </List>
    </div>
  );
};

export default DataRootPage;
