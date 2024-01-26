import getTag from "./toString";

function isSymbol<T>(value: T): boolean {
  const type = typeof value;
  return (
    type === "symbol" ||
    (type === "object" && value != null && getTag(value) === "[object Symbol]")
  );
}
export default isSymbol;
