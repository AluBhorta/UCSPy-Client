import React, { useState } from "react";
import Error404Page from "./Error404Page";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  ListItemSecondaryAction,
  ButtonGroup,
} from "@material-ui/core";

const DataDetailPage: React.FC<{
  pageName: string;
}> = ({ pageName }) => {
  const pageNames = ["schedule-params", "logs", "schedules"];
  const secondaryActionNames = ["solve", "plot", "inspect"];
  const secondaryActionRoutes = ["/solve/config", "/plot/example.log", "/inspect/example.csv"];

  let currentPageIdx = -1;

  const [listItems, setListItems] = useState<string[]>([
    "Hello",
    "TS",
    "is",
    "cool",
  ]);

  switch (pageName) {
    case pageNames[0]:
      currentPageIdx = 0;
      break;
    case pageNames[1]:
      currentPageIdx = 1;
      break;
    case pageNames[2]:
      currentPageIdx = 2;
      break;
    default:
      return <Error404Page />;
  }

  return (
    <div>
      <h1>Data: {pageName.toUpperCase()}</h1>
      <Button variant="contained" color="primary">
        Upload New
      </Button>
      <List>
        {listItems.map((item, i) => (
          <ListItem button key={i}>
            <ListItemText>{item}</ListItemText>
            <ListItemSecondaryAction>
              <ButtonGroup variant="contained" color="primary">
                <Button>Download</Button>
                <Button href={secondaryActionRoutes[currentPageIdx]} >
                  {secondaryActionNames[currentPageIdx].toUpperCase()}
                </Button>
              </ButtonGroup>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DataDetailPage;
