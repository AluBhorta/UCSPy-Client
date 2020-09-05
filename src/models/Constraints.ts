export type HardConstraint = {
  id: number;
  desc: string;
};

export type SoftConstraint = {
  id: number;
  desc: string;
  unitPenalty: number;
};

export type ConstraintViolationsOfClass = {
  classIdx: number;
  violatedHardConstraintIdxs: number[];
  violatedSoftConstraintIdxs: number[];
};
