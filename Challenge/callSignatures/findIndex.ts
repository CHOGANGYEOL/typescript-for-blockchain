// findIndex(arr, item) : item이 arr배열의 몇번째 idx인치 체크 후 존제하면 idx 아닐경우 null을 반환한다.
function findIndex<T>(arr: T[], item: unknown): number | null {
  let idx: number | null = null;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === typeof item && arr[i] === item) {
      idx = i;
      break;
    }
  }
  return idx;
}

console.log("findIndex test : ", findIndex([1, 2, 3, 4], "a"));
