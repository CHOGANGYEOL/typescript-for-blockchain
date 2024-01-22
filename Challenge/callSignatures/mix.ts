// mix(arr,arr): 두개의 배열을 하나의 배열로 반환한다.
type Mix = {
  <T, V>(arr: T[], arr2: V[]): (T | V)[];
};
const mix: Mix = (arr, arr2) => [...arr, ...arr2];

console.log("mix test : ", mix([1, 2, 3], ["a", "b"]));
