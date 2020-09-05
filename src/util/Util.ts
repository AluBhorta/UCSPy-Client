import qs from "qs";

export function parseQueryString(qString: string) {
  return qs.parse(qString, { ignoreQueryPrefix: true });
}
