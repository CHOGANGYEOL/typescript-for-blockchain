function map<T>(
  array: T[],
  iteratee: (value: T, index: number, array: T[]) => T
) {
  let index = -1;
  const length = array == null ? 0 : array.length;
  const result = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

export default map;
