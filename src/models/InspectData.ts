import { Schedule } from "./Schedule";
import {
  HardConstraint,
  SoftConstraint,
  ConstraintViolationsOfClass,
} from "./Constraints";

export type InspectData = {
  scheduleFileName: string;
  fitness: number;
  schedule: Schedule;
  violations: ConstraintViolationsOfClass[];
  constraints: {
    hardConstraints: HardConstraint[];
    softConstraints: SoftConstraint[];
  };
};
