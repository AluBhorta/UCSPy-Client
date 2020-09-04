import React, { useState, useEffect } from "react";
import { UserConfig, ConfigDescription } from "../models/Config";
import {
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Slider,
} from "@material-ui/core";

const SolveConfigPage: React.FC = () => {
  const [userConfig, setUserConfig] = useState<UserConfig>({
    scheduleParamName: "",
    fitness: {
      use: "",
      minAcceptableFitness: 0,
    },
    constrinats: {
      softConstraints: [],
      hardConstraints: [],
    },
    algorithm: "",
  });

  const [configDesc, setConfigDesc] = useState<ConfigDescription>({
    scheduleParamNames: [],
    algorithm: {
      algorithmNames: [],
    },
    fitness: {
      functionNames: [],
    },
    constrinats: {
      hardConstraints: [],
      softConstraints: [],
    },
  });

  // useEffect(() => {
  //   // fetch latest configDesc using ApiClient
  //   return () => {};
  // }, []);

  const gridItemSize = 4;
  return (
    <div>
      <h1>Configure Solver</h1>
      <hr />
      <Grid container spacing={4}>
        <Grid item sm={gridItemSize}>
          <Paper>
            <Box padding={2}>
              <h2>Schedle Param</h2>
              <div>
                <p>Select from existing.</p>
                <FormControl>
                  <InputLabel id="scheduleParamLabel">Age</InputLabel>
                  <Select
                    labelId="scheduleParamLabel"
                    id="scheduleParamSelect"
                    value={10}
                    // onChange={handleChange}
                  >
                    {/* MOCK */}
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    {configDesc.scheduleParamNames.map(
                      (scheduleParamName, idx) => (
                        <MenuItem key={idx} value={scheduleParamName}>
                          {scheduleParamName}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </div>
              <p>OR</p>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  component="span"
                  onClick={() => {
                    // should open up modal to upload each indi scheduleParam file
                    // show examples of file format
                  }}
                >
                  Upload
                </Button>{" "}
                new.
              </div>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={gridItemSize}>
          <Paper>
            <Box padding={2}>
              <h2>Constraints</h2>
              <p>Select the constraints to use.</p>
              <div>
                <h3>Hard Constraints</h3>
                <List>
                  {/* MOCK */}
                  {[1, 2].map((i) => (
                    <ListItem key={i}>
                      <ListItemText
                        primary={`Hard Constraint ${i}`}
                        secondary="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis repellendus, vitae eos,"
                      />
                      <Checkbox />
                    </ListItem>
                  ))}
                  {configDesc.constrinats.hardConstraints.map((hc) => (
                    <ListItem key={hc.id}>
                      <ListItemText primary={hc.id} secondary={hc.desc} />
                      <Checkbox />
                    </ListItem>
                  ))}
                </List>
              </div>
              <div>
                <h3>Soft Constraints</h3>
                <List>
                  {/* MOCK */}
                  {[1, 2, 3, 4].map((i) => (
                    <ListItem key={i}>
                      <ListItemText
                        primary={`Soft Constraint ${i}`}
                        secondary="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis repellendus, vitae eos, sdaf dsafj"
                      />
                      <Slider
                        min={0}
                        max={1}
                        defaultValue={0.5}
                        aria-labelledby="discrete-slider-always"
                        step={0.001}
                        valueLabelDisplay="on"
                      />
                      <Checkbox />
                    </ListItem>
                  ))}
                  {configDesc.constrinats.softConstraints.map((sc) => (
                    <ListItem key={sc.id}>
                      <ListItemText primary={sc.id} secondary={sc.desc} />
                      <Slider
                        min={0}
                        max={1}
                        defaultValue={0.5}
                        aria-labelledby="discrete-slider-always"
                        step={0.001}
                        valueLabelDisplay="on"
                      />
                      <Checkbox />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={gridItemSize}>
          <Paper>
            <Box padding={2}>
              <h2>Fitness</h2>
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={gridItemSize}>
          <Box padding={2}>
            <h2>Algorithm</h2>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SolveConfigPage;
