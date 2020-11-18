import React, { useState, useEffect } from "react";
import InspectScheduleTable from "../components/ScheduleTable";
import Error404Page from "./Error404Page";
import { InspectData } from "../models/InspectData";
import { CircularProgress, Button, Box } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";

const InspectPage: React.FC<{
  scheduleFileName: string;
}> = ({ scheduleFileName }) => {
  const [loading, setLoading] = useState(true);
  const [inspectData, setInspectData] = useState<InspectData>({
    scheduleFileName: "",
    fitness: 0,
    schedule: { classes: [] },
    violations: [],
    constraints: {
      hardConstraints: [],
      softConstraints: [],
    },
  });

  useEffect(() => {
    setTimeout(() => {
      // TODO: fetch _ and replace mock data
      inspectData.scheduleFileName = scheduleFileName;
      inspectData.schedule = genSchedule();
      inspectData.violations = inspectData.schedule.classes.map((cls, idx) => ({
        classIdx: idx,
        violatedHardConstraintIdxs: [],
        violatedSoftConstraintIdxs: idx % 2 === 0 ? [] : [idx],
      }));

      setLoading(false);
    }, 1000);

    return () => {};
  }, [scheduleFileName]);

  if (!scheduleFileName) {
    return (
      <Error404Page
        message={`Invalid Schedule File Name provided: ${scheduleFileName}`}
      />
    );
  }

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <h1>Inspect: {scheduleFileName}</h1>
      <p>Fitness: {inspectData.fitness}</p>

      <InspectScheduleTable inspectData={inspectData} />
    </div>
  );
};

export default InspectPage;

function genSchedule(n = 20) {
  const idxs = Array.from({ length: n }, (v, k) => k);
  const classes = idxs.map((i) => ({
    course: `short course ${i}`,
    section: `long name section ${i}`,
    instructor: `very long name of instructor ${i}`,
    room: `Long name of room ${i}`,
    timeslot: `very long name of timeslot ${i}`,
  }));
  return { classes };
}
