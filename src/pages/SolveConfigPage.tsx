import React, { useState, useContext, useEffect } from "react";
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
  TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PublishIcon from "@material-ui/icons/Publish";

import { UserConfig, ConfigDescription } from "../models/Config";
import UploadDataModal from "../components/UploadDataModal";
import { dataPageNames } from "../models/DataPage";
import { AppContext } from "../AppState";
import Loading from "../components/Loading";
import SolverApiClient from "../api/SovlerApiClient";

const SolveConfigPage: React.FC = () => {
  const history = useHistory();
  const { runNewSolver } = useContext(AppContext);

  const [loading, setLoading] = useState(true);
  const [openUploadModal, setOpenUploadModal] = useState(false);

  /* input fields */
  const [solverName, setSolverName] = useState("Test Solver");

  const [userConfig, setUserConfig] = useState<UserConfig>({
    scheduleParamName: "",
    fitness: {
      use: "",
      minAcceptableFitness: 0,
    },
    constraints: {
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
    constraints: {
      hardConstraints: [],
      softConstraints: [],
    },
  });

  const apiClient = new SolverApiClient();

  useEffect(() => {
    apiClient
      .getConfigDescription()
      .then((cd: ConfigDescription) => {
        setConfigDesc(cd);

        setUserConfig({
          ...userConfig,
          constraints: {
            hardConstraints: cd.constraints.hardConstraints.map((hc) => ({
              id: hc.id,
            })),
            softConstraints: cd.constraints.softConstraints.map((sc) => ({
              id: sc.id,
              unitPenalty: sc.unitPenalty,
            })),
          },
          scheduleParamName:
            cd.scheduleParamNames.length > 0 ? cd.scheduleParamNames[0] : "",
          algorithm:
            cd.algorithm.algorithmNames.length > 0
              ? cd.algorithm.algorithmNames[0]
              : "",
          fitness: {
            use:
              cd.fitness.functionNames.length > 0
                ? cd.fitness.functionNames[0]
                : "",
            minAcceptableFitness: 0,
          },
        });

        setLoading(false);
      })

      .catch((e) => console.error(e));
    return () => {};
  }, []);

  const handleRunClick = () => {
    runNewSolver(userConfig, solverName).then((solver) => {
      setTimeout(() => {
        history.push(`/solve/detail/${solver.id}`);
      }, 200);
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Grid container justify="space-between">
        <Grid item>
          <h1>Configure Solver</h1>
        </Grid>
        <Grid item>
          <Box margin={2}>
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => handleRunClick()}
              startIcon={<DirectionsRunIcon />}
            >
              RUN!
            </Button>
          </Box>
        </Grid>
      </Grid>

      <hr />

      <Grid container spacing={4} justify="space-evenly">
        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Solver Name</h2>
              <FormControl>
                <FormLabel>Name the solver.</FormLabel>
                <Box marginTop={2}>
                  <TextField
                    label="Solver Name"
                    value={solverName}
                    onChange={(e) => setSolverName(e.target.value)}
                  />
                </Box>
              </FormControl>
            </Box>
          </Paper>
        </Grid>
        <Grid item md>
          <Paper>
            <Box padding={2}>
              <h2>Schedule Param</h2>
              <div>
                <FormControl>
                  <FormLabel>Select existing Schedule Param.</FormLabel>
                  <Select
                    id="scheduleParamInput"
                    value={userConfig.scheduleParamName}
                    required
                    onChange={(e) => {
                      if (typeof e.target.value === "string") {
                        setUserConfig({
                          ...userConfig,
                          scheduleParamName: e.target.value,
                        });
                      }
                    }}
                  >
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
                  onClick={() => setOpenUploadModal(true)}
                  startIcon={<PublishIcon />}
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
                    value={userConfig.fitness.use}
                    required
                    onChange={(e) => {
                      if (typeof e.target.value === "string") {
                        setUserConfig({
                          ...userConfig,
                          fitness: {
                            use: e.target.value,
                            minAcceptableFitness:
                              userConfig.fitness.minAcceptableFitness,
                          },
                        });
                      }
                    }}
                  >
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
                    step={0.01}
                    valueLabelDisplay="auto"
                    onChange={(event, value) => {
                      setUserConfig({
                        ...userConfig,
                        fitness: {
                          ...userConfig.fitness,
                          minAcceptableFitness: value as number,
                        },
                      });
                    }}
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
                  value={userConfig.algorithm}
                  required
                  onChange={(e) => {
                    if (typeof e.target.value === "string") {
                      setUserConfig({
                        ...userConfig,
                        algorithm: e.target.value,
                      });
                    }
                  }}
                >
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
                    {configDesc.constraints.hardConstraints.map((hc, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <Checkbox
                            checked={
                              userConfig.constraints.hardConstraints.filter(
                                (_hc) => hc.id === _hc.id
                              ).length > 0
                            }
                            onChange={(e) => {
                              if (e.target.checked === false) {
                                setUserConfig({
                                  ...userConfig,
                                  constraints: {
                                    hardConstraints: userConfig.constraints.hardConstraints.filter(
                                      (_hc) => _hc.id !== hc.id
                                    ),
                                    softConstraints:
                                      userConfig.constraints.softConstraints,
                                  },
                                });
                              } else {
                                setUserConfig({
                                  ...userConfig,
                                  constraints: {
                                    hardConstraints: [
                                      ...userConfig.constraints.hardConstraints,
                                      { id: hc.id },
                                    ],
                                    softConstraints:
                                      userConfig.constraints.softConstraints,
                                  },
                                });
                              }
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Hard Constraint ${hc.id}`}
                          secondary={hc.desc}
                        />
                      </ListItem>
                    ))}
                  </FormControl>
                </List>
              </div>
              <Divider />
              <div>
                <h3>Soft Constraints</h3>
                <List>
                  {configDesc.constraints.softConstraints.map((sc, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <FormControl>
                          <Checkbox
                            checked={
                              userConfig.constraints.softConstraints.filter(
                                (_sc) => sc.id === _sc.id
                              ).length > 0
                            }
                            onChange={(e) => {
                              if (e.target.checked === false) {
                                setUserConfig({
                                  ...userConfig,
                                  constraints: {
                                    softConstraints: userConfig.constraints.softConstraints.filter(
                                      (_sc) => _sc.id !== sc.id
                                    ),
                                    hardConstraints:
                                      userConfig.constraints.hardConstraints,
                                  },
                                });
                              } else {
                                setUserConfig({
                                  ...userConfig,
                                  constraints: {
                                    softConstraints: [
                                      ...userConfig.constraints.softConstraints,
                                      {
                                        id: sc.id,
                                        unitPenalty: sc.unitPenalty,
                                      },
                                    ],
                                    hardConstraints:
                                      userConfig.constraints.hardConstraints,
                                  },
                                });
                              }
                            }}
                          />
                        </FormControl>
                      </ListItemIcon>
                      <Box width="60%" maxWidth="80%">
                        <ListItemText
                          primary={`Soft Constraint ${sc.id}`}
                          secondary={sc.desc}
                        />
                      </Box>
                      <FormLabel>Penalty</FormLabel>

                      <Box width="20%">
                        <Slider
                          min={0}
                          max={1}
                          defaultValue={sc.unitPenalty}
                          aria-labelledby="discrete-slider-always"
                          step={0.01}
                          valueLabelDisplay="auto"
                          onChange={(e, value) => {
                            setUserConfig({
                              ...userConfig,
                              constraints: {
                                ...userConfig.constraints,
                                softConstraints: userConfig.constraints.softConstraints.map(
                                  (_sc) =>
                                    sc.id === _sc.id
                                      ? { ..._sc, unitPenalty: value as number }
                                      : _sc
                                ),
                              },
                            });
                          }}
                        />
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <UploadDataModal
        pageName={dataPageNames[0]}
        isOpen={openUploadModal}
        setIsOpen={setOpenUploadModal}
        onSave={(nameValue: string) => {
          setConfigDesc({
            ...configDesc,
            scheduleParamNames: [...configDesc.scheduleParamNames, nameValue],
          });

          setUserConfig({ ...userConfig, scheduleParamName: nameValue });
        }}
      />
    </div>
  );
};

export default SolveConfigPage;
