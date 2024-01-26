import isSymbol from "../utils/isSymbol";

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

function toString(value: any): string {
  if (value == null) {
    return "";
  }
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return `${value.map((other) => (other == null ? other : toString(other)))}`;
  }
  if (isSymbol(value)) {
    return value.toString();
  }
  const result = `${value}`;
  return result === "0" && 1 / value === -INFINITY ? "-0" : result;
}

export default toString;
