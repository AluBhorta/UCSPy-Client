import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { InspectData } from "../models/InspectData";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

const InspectScheduleTable: React.FC<{
  inspectData: InspectData;
}> = ({ inspectData }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Class Idx</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Instructor</TableCell>
            <TableCell align="right">Room</TableCell>
            <TableCell align="right">Timeslot</TableCell>
            <TableCell align="right">Hard Constraint Violations</TableCell>
            <TableCell align="right">Soft Constraint Violations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inspectData.schedule.classes.map((_cls, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
                {idx}
              </TableCell>
              <TableCell align="right">{_cls.course}</TableCell>
              <TableCell align="right">{_cls.section}</TableCell>
              <TableCell align="right">{_cls.instructor}</TableCell>
              <TableCell align="right">{_cls.room}</TableCell>
              <TableCell align="right">{_cls.timeslot}</TableCell>
              <TableCell align="right">
                {inspectData.violations[
                  idx
                ]?.violatedHardConstraintIdxs.toString()}
              </TableCell>
              <TableCell align="right">
                {inspectData.violations[
                  idx
                ]?.violatedSoftConstraintIdxs.toString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InspectScheduleTable;
