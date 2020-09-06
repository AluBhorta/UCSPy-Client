import { SoftConstraint, HardConstraint } from "./Constraints";

export type UserConfig = {
  scheduleParamName: string;
  constraints: {
    hardConstraints: {
      id: number
    }[];
    softConstraints: {
      id: number
      unitPenalty: number
    }[]
  };
  fitness: {
    use: string;
    minAcceptableFitness: number;
  };
  algorithm: string;
};

export type ConfigDescription = {
  scheduleParamNames: string[];
  constraints: {
    hardConstraints: HardConstraint[];
    softConstraints: SoftConstraint[];
  };
  fitness: {
    functionNames: string[];
  };
  algorithm: {
    algorithmNames: string[];
  };
};
