import asciiToArray from "./asciiToArray";
import hasUnicode from "./hasUnicode";
import unicodeToArray from "./unicodeToArray";

function stringToArray(string: string): string[] {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

export default stringToArray;
