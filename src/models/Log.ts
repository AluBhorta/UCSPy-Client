export type LogFileData = {
  logFileName: string;
  records: {
    generation: number;
    fintess: number;
  }[];
  finalFitness: number;
  algorithmName: string;
  defaultArgs: any;
  scheduleFileName: string;
  timeTakenInSeconds: number;
};
