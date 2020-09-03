import React from "react";
import { List, ListItem, Card, CardContent, CardHeader, Grid } from "@material-ui/core";


const DataRootPage: React.FC = () => {
  return (
    <div>
      <h1>DataRootPage</h1>
      <Card>
        <CardHeader>Data</CardHeader>
        <CardContent>
          <List>
            <ListItem>Schedule Params</ListItem>
            <ListItem>Logs</ListItem>
            <ListItem>Output Schedules</ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataRootPage;
