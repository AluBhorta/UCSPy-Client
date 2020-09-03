export type UserConfig = {
  scheduleParamName: string;
  constrinats: {
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
  constrinats: {
    hardConstraints: {
      id: number;
      desc: string;
    }[];
    softConstraints: {
      id: number;
      desc: string;
      unitPenalty: number;
    }[];
  };
  fitness: {
    functionNames: string[];
  };
  algorithm: {
    algorithmNames: string[];
  };
};
