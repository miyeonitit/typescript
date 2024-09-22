// any
// 특정 변수의 타입을 우리가 모를 때 사용

let anyVar: any = 10;

let num: number = 10;
num = anyVar;

anyVar = {};
num.toLocaleString();

// 값을 저장 OK
// 연산 OK, but 런타임 했을 때 그제서야 error

// ------------

// unknown

let unKnownVar: unknown;

unKnownVar = "";
unKnownVar = 1;
unKnownVar = () => {};

if (typeof unKnownVar === "number") {
  num = unKnownVar;
}

// 값을 저장 OK
// 연산 error, but 25번째 코드처럼 타입 정제 (타입 좁히기)를 했을 때에만 연산 OK
