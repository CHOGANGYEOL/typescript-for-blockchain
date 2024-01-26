import isObjectLike from "./isObjectLike.js";
import getTag from "./toString.js";

function isArguments(value: any): boolean {
  return isObjectLike(value) && getTag(value) === "[object Arguments]";
}

export default isArguments;
