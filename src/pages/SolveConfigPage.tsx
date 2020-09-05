import React, { useState } from "react";
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
  Select,
  MenuItem,
  Button,
  Slider,
  FormLabel,
  Divider,
  ListItemIcon,
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

  return (
    <div>
      <h1>Configure Solver</h1>
      <hr />
      <Grid container spacing={4} justify="space-evenly">
        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Schedle Param</h2>
              <div>
                <FormControl>
                  <FormLabel>Select existing Schedle Param</FormLabel>
                  <Select
                    id="scheduleParamInput"
                    value={1}
                    // onChange={handleChange}
                  >
                    {/* MOCK */}
                    <MenuItem value={1}>IUB CSE Summer 2020</MenuItem>
                    <MenuItem value={2}>IUB CSE Autumn 2020</MenuItem>
                    <MenuItem value={3}>IUB CSE Autumn 2019</MenuItem>
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
                  onClick={() => {
                    // should open up modal to upload each indi scheduleParam file
                    // show examples of file format
                  }}
                >
                  Upload
                </Button>
              </div>
            </Box>
          </Paper>
        </Grid>

        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Fitness</h2>
              <div>
                <FormControl>
                  <FormLabel>Select fitness function.</FormLabel>

                  <Select
                    id="fitnessInput"
                    value={1}
                    // onChange={handleChange}
                  >
                    {/* MOCK */}
                    <MenuItem value={1}>Tanh</MenuItem>
                    <MenuItem value={2}>Expo</MenuItem>
                    {configDesc.fitness.functionNames.map((fName, idx) => (
                      <MenuItem key={idx} value={fName}>
                        {fName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <br />
              <div>
                <FormControl>
                  <FormLabel>Min Acceptable Fitness</FormLabel>
                  <Slider
                    min={0}
                    max={1}
                    defaultValue={0.5}
                    aria-labelledby="discrete-slider-always"
                    step={0.001}
                    valueLabelDisplay="auto"
                  />
                </FormControl>
              </div>
            </Box>
          </Paper>
        </Grid>

        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Algorithm</h2>
              <FormControl>
                <FormLabel>Select algorithm.</FormLabel>
                <Select
                  id="algorithmInput"
                  value={1}
                  // onChange={handleChange}
                >
                  {/* MOCK */}
                  <MenuItem value={1}>Genetic Algorithm</MenuItem>
                  <MenuItem value={2}>Memetic Algorithm</MenuItem>
                  {configDesc.algorithm.algorithmNames.map((aName, idx) => (
                    <MenuItem key={idx} value={aName}>
                      {aName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Constraints</h2>
              <FormLabel>Select the constraints to use.</FormLabel>
              <div>
                <h3>Hard Constraints</h3>
                <List>
                  <FormControl>
                    {/* MOCK */}
                    {[1, 2].map((i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <Checkbox />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Hard Constraint ${i}`}
                          secondary="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Perferendis repellendus, vitae eos,"
                        />
                      </ListItem>
                    ))}
                    {configDesc.constrinats.hardConstraints.map((hc) => (
                      <ListItem key={hc.id}>
                        <ListItemText primary={hc.id} secondary={hc.desc} />
                        <Checkbox />
                      </ListItem>
                    ))}
                  </FormControl>
                </List>
              </div>
              <Divider />
              <div>
                <h3>Soft Constraints</h3>
                <List>
                  <FormControl>
                    {/* MOCK */}
                    {[1, 2, 3, 4].map((i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <Checkbox />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Soft Constraint ${i}`}
                          secondary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque veritatis ullam facere obcaecati assumenda distinctio ratione eius ?"
                        />
                        <FormLabel>Penalty</FormLabel>
                        <Slider
                          min={0}
                          max={1}
                          defaultValue={0.5}
                          aria-labelledby="discrete-slider-always"
                          step={0.001}
                          valueLabelDisplay="auto"
                        />
                      </ListItem>
                    ))}
                  </FormControl>
                </List>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box margin={2}>
        <Button
          size="large"
          variant="contained"
          color="secondary"
          href="/solve/run"
        >
          RUN!
        </Button>
      </Box>
    </div>
  );
};

export default SolveConfigPage;
