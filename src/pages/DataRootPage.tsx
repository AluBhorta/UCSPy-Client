import React from "react";
import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const DataRootPage: React.FC = () => {
  return (
    <div>
      <h1>Data</h1>

      <List>
        <Link to="/data/schedule-params">
          <ListItem button>Schedule Params</ListItem>
        </Link>
        <Link to="/data/logs">
          <ListItem button>Logs</ListItem>
        </Link>
        <Link to="/data/schedules">
          <ListItem button>Schedules</ListItem>
        </Link>
      </List>
    </div>
  );
};

export default DataRootPage;
