// slice(arr, startIndex, endIndex): arr을 startIndex부터 endIndex까지 자른 결과를 반환한다. 이때 endIndex는 optional
function slice<T>(arr: T[], startIndex: number, endIndex?: number): T[] {
  const result: T[] = [];
  const length = arr.length;

  if (startIndex >= length) {
    return result;
  }

  if (endIndex === undefined || endIndex >= length) {
    endIndex = length - 1;
  }

  for (let i = startIndex; i <= endIndex; i++) {
    result.push(arr[i]);
  }
  return result;
}

console.log("slice test : ", slice([1, 2, 3, 4, 5, 6], 2));
