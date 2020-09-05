import React, { useState, useEffect } from "react";
import Error404Page from "./Error404Page";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  ListItemSecondaryAction,
  ButtonGroup,
} from "@material-ui/core";
import UploadDataModal from "../components/UploadDataModal";
import { dataPageNames } from "../AppState";

const DataDetailPage: React.FC<{
  pageName: string;
}> = ({ pageName }) => {
  const secondaryActionNames = ["solve", "plot", "inspect"];
  const secondaryActionRoutes = [
    "/solve/config",
    "/plot/example.log",
    "/inspect/example.csv",
  ];
  const [openUploadModal, setOpenUploadModal] = useState(false);
  const [listItems, setListItems] = useState<string[]>([]);

  let currentPageIdx = -1;

  useEffect(() => {
    setListItems([
      "IUB CSE Summer 2020",
      "IUB CSE Autumn 2020",
      "IUB CSE Autumn 2019",
      "This is just static data",
      "Calm down",
    ]);
    return () => {};
  }, [pageName]);

  switch (pageName) {
    case dataPageNames[0]:
      currentPageIdx = 0;
      break;
    case dataPageNames[1]:
      currentPageIdx = 1;
      break;
    case dataPageNames[2]:
      currentPageIdx = 2;
      break;
    default:
      return <Error404Page />;
  }

  return (
    <div>
      <h1>Data: {pageName.toUpperCase()}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenUploadModal(true)}
      >
        Upload New
      </Button>
      <List>
        {listItems.map((item, i) => (
          <ListItem button key={i}>
            <ListItemText>{item}</ListItemText>
            <ListItemSecondaryAction>
              <ButtonGroup variant="contained" color="primary">
                <Button>Download</Button>
                <Button href={secondaryActionRoutes[currentPageIdx]}>
                  {secondaryActionNames[currentPageIdx].toUpperCase()}
                </Button>
              </ButtonGroup>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <UploadDataModal
        pageName={pageName}
        isOpen={openUploadModal}
        setIsOpen={setOpenUploadModal}
      />
    </div>
  );
};

export default DataDetailPage;
