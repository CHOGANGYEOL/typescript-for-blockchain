// prepend(arr, item): arr의 시작 부분에 item을 넣고 배열을 return 한다.
type Prepend = {
  <T, V>(arr: T[], item: V): (T | V)[];
};

const prepend: Prepend = (arr, item) => [item, ...arr];

console.log("prepend test : ", prepend([1, 2, 3], 4));
