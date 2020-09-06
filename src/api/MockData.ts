import { ConfigDescription } from "../models/Config";

export const mockConfigDescription: ConfigDescription = {
  scheduleParamNames: [
    "IUB CSE Summer 2020",
    "IUB CSE Autumn 2020",
    "IUB CSE Autumn 2019",
  ],
  algorithm: {
    algorithmNames: ["Genetic Algorithm", "Memetic Algorithm"],
  },
  fitness: {
    functionNames: ["Default", "TanH"],
  },
  constraints: {
    hardConstraints: [
      { id: 1, desc: "Hello HC 1, Lorem ipsum and so on" },
      {
        id: 2,
        desc:
          "Hello HC 2, Lorem ipsum dolor sit, amet consectetur adipisicing elitPerferendis repellendus, vitae eos,",
      },
    ],
    softConstraints: [
      {
        id: 1,
        unitPenalty: 0.69,
        desc: "Hello SC 1, Lorem ipsum and so on",
      },
      {
        id: 2,
        unitPenalty: 0.22,
        desc:
          "Hello SC 2, Lorem ipsum dolor sit, amet consectetur adipisicing elitPerferendis repellendus, vitae eos,",
      },
      {
        id: 3,
        unitPenalty: 0.69,
        desc: "Hello SC 3, Lorem ipsum and so on",
      },
      {
        id: 4,
        unitPenalty: 0.96,
        desc:
          "Hello SC 4, Lorem ipsum and so on  Lorem ipsum and so on  Lorem ipsum and so on ",
      },
      {
        id: 5,
        unitPenalty: 0.69,
        desc: "Hello SC 5, Lorem ipsum and so on",
      },
      {
        id: 6,
        unitPenalty: 0.666,
        desc:
          "Hello SC 6, Lorem ipsum and so on Lorem ipsum dolor sit, amet consectetur adipisicing elitPerferendis repellendus, vitae eos, Lorem ipsum dolor sit, amet consectetur adipisicing elitPerferendis repellendus, vitae eos,",
      },
    ],
  },
};
