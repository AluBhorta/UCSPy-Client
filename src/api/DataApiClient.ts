import { mockConfigDescription } from "./MockData";
import { ConfigDescription } from "../models/Config";

export default class DataApiClient {
  getConfigDescription = async () => {
    // fetch("/get-config-description")
    return new Promise<ConfigDescription>((resolve, reject) => {
      setTimeout(() => {
        resolve(mockConfigDescription);
      }, 100);
    });
  };

  getLogFileData = async (logFileName: string) => {};

  getAllLogFileNames = async () => {};
  getAllScheduleParamNames = async () => {};
  getAllScheduleNames = async () => {};

  downloadScheduleParam = async (fName: string) => {};
  downloadLog = async (fName: string) => {};
  downloadSchedule = async (fName: string) => {};

  uploadScheduleParam = async () => {};
  uploadLog = async () => {};
  uploadSchedule = async () => {};

  getInspectData = async (scheduleFileName: string) => {};
}
