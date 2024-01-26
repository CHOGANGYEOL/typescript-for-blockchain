import isObjectLike from "../utils/isObjectLike";
import getTag from "../utils/toString";

function isBoolean<T>(value: T): boolean {
  return (
    value === true ||
    value === false ||
    (isObjectLike(value) && getTag(value) === "[object Boolean]")
  );
}

export default isBoolean;
