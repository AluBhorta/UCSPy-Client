import qs from "qs";
import { v4 as uuidv4 } from "uuid";

export function parseQueryString(qString: string) {
  return qs.parse(qString, { ignoreQueryPrefix: true });
}

export function getUUID() {
  return uuidv4();
}
