export default class DataApiClient {
  getConfigDescription = () => {};

  getLogFileData = (logFileName: string) => {};
  
  getAllLogFileNames = () => {};
  getAllScheduleParamNames = () => {};
  getAllScheduleNames = () => {};
  
  downloadScheduleParam = (fName: string) => {};
  downloadLog = (fName: string) => {};
  downloadSchedule = (fName: string) => {};
  
  uploadScheduleParam = () => {};
  uploadLog = () => {};
  uploadSchedule = () => {};
  
  getInspectData = (scheduleFileName: string) => {};
}
