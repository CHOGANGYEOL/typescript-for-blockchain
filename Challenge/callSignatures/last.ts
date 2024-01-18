// last(arr): 배열의 마지막 요소를 반환
type Last = {
  <T>(arr: T[]): T | undefined;
};

const last: Last = (arr) => {
  const copyArr = arr.slice();
  const lastItem = copyArr.pop();
  return lastItem;
};

console.log("last test : ", last([1, 2, 3]));
