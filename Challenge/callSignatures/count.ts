// count(arr) : 매개변수로 받아온 배열의 길이를 반환한다.
function count<T>(arr: T[]): number {
  return arr.length;
}

console.log("count test : ", count([1, 2, 3, 4]));
