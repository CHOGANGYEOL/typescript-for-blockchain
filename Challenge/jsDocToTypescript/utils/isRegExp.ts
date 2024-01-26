import isObjectLike from "./isObjectLike.js";
import getTag from "./toString.js";

/* Node.js helper references. */
const nodeIsRegExp = <T>(value: T): boolean => true;

const isRegExp = nodeIsRegExp
  ? <T>(value: T): boolean => nodeIsRegExp(value)
  : <T>(value: T): boolean =>
      isObjectLike(value) && getTag(value) === "[object RegExp]";

export default isRegExp;
