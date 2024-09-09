// 배열
const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["hi", "iam", "miyeon"];
const booArr: Array<boolean> = [true, false];

const multiArr1: (string | number)[] = [1, "hello"];
const mutliArr2: Array<string | number> = [2, "test"];

const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// tuple
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tep2: [number, string, boolean] = [3, "my", true];
