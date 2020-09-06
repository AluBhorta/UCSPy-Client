import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  Box,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";
import { dataPageNames } from "../AppState";
import Error404Page from "../pages/Error404Page";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

const UploadDataModal: React.FC<{
  pageName: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave?: Function | undefined;
}> = ({ pageName, isOpen, setIsOpen, onSave }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [nameValue, setNameValue] = useState("");

  const listItems: string[] = [];

  switch (pageName) {
    case dataPageNames[0]:
      listItems.push(
        ...["Rooms", "Timeslots", "Courses", "Instructors", "Course Groups"]
      );
      break;
    case dataPageNames[1]:
      listItems.push("Log");
      break;
    case dataPageNames[2]:
      listItems.push("Schedule");
      break;
    default:
      return <Error404Page />;
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Upload {pageName.toUpperCase()}</h2>
          <p id="simple-modal-description"></p>

          <form>
            <List>
              <ListItem>
                <TextField
                  variant="outlined"
                  label="Name"
                  required
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
              </ListItem>
              {listItems.map((item, idx) => (
                <ListItem key={idx}>
                  <ListItemText>{item}</ListItemText>
                  <ListItemSecondaryAction>
                    <input type="file" required />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </form>
          <Box textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setIsOpen(false);
                if (onSave !== undefined) {
                  onSave(nameValue);
                }
                setNameValue("");
              }}
            >
              Save
            </Button>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default UploadDataModal;
