import castSlice from "../utils/castSlice.js";
import hasUnicode from "../utils/hasUnicode.js";
import isRegExp from "../utils/isRegExp.js";
import stringToArray from "../utils/stringToArray.js";

const MAX_ARRAY_LENGTH = 4294967295;

function split(
  string: string,
  separator: string | RegExp,
  limit: number
): string[] {
  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
  if (!limit) {
    return [];
  }
  if (
    string &&
    (typeof separator === "string" ||
      (separator != null && !isRegExp(separator)))
  ) {
    if (!separator && hasUnicode(string)) {
      return castSlice(stringToArray(string), 0, limit);
    }
  }
  return string.split(separator, limit);
}

export default split;
