import React, { useState, useEffect } from "react";
import { LogFileData } from "../models/Log";
import { CircularProgress, Grid, Paper, Box } from "@material-ui/core";
import Error404Page from "./Error404Page";
import { Redirect } from "react-router-dom";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PlotPage: React.FC<{
  logFileName: string;
}> = ({ logFileName }) => {
  const [loading, setLoading] = useState(true);
  const [logFileData, setLogFileData] = useState<LogFileData>({
    logFileName: "",
    records: [],
    finalFitness: 1,
    algorithmName: "",
    defaultArgs: {},
    scheduleFileName: "",
    timeTakenInSeconds: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      // TODO: fetch LogFileData and replace mock data
      logFileData.logFileName = logFileName;
      logFileData.records = genLogRecords(1000);
      setLoading(false);
    }, 1000);

    return () => {};
  }, [logFileName]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
        <CircularProgress />
      </div>
    );
  }

  if (!loading && logFileData.logFileName === "") {
    return <Error404Page message="Invalid Log Selected!" />;
  }

  return (
    <div>
      <h1>Plot: {logFileData.logFileName}</h1>
      <div style={{ width: "100%", height: "65vh", maxHeight: "90vh" }}>
        <ResponsiveContainer>
          <LineChart
            data={logFileData.records}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="generation" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Legend />
            <Tooltip />
            <Line type="monotone" dataKey="fintess" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <Grid container justify="space-evenly">
        <Grid item>
          <Paper>
            <Box padding={2}>
              <span>Final fitness: {logFileData.finalFitness}</span>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Box padding={2}>
              <span>Algorithm: {logFileData.algorithmName}</span>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Box padding={2}>
              <span>Schedule File: {logFileData.scheduleFileName}</span>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Box padding={2}>
              <span>Time Taken: {logFileData.timeTakenInSeconds} s</span>
            </Box>
          </Paper>
        </Grid>
        {/* TODO
          <p>Default Args: {logFileData.defaultArgs}</p> 
        */}
      </Grid>
    </div>
  );
};

export default PlotPage;

function genLogRecords(len = 200) {
  const values = Array.from({ length: len }, () => Math.random());
  return values.map((val, idx) => ({
    generation: idx,
    fintess: val,
  }));
}
