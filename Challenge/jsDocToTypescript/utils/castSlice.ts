import slice from "./slice";

function castSlice<T>(array: T[], start: number, end: number): T[] {
  const { length } = array;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : slice(array, start, end);
}

export default castSlice;
