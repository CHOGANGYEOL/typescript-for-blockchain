import isKey from "./isKey";
import stringToPath from "./stringToPath";

function castPath(value: any, object: any): any[] {
  if (Array.isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(value);
}

export default castPath;
