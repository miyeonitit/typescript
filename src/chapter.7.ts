// void
// 공허 === 아무것도 없음
// return 을 하지 않은 함수를 정의할 때

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello worrld");
}

// never
// 존재하지 않는 === 불가능한 타입
// 불가능, 모순

// void는 반환할 값이 없을 때 사용
// never는 반환을 아예 할 수가 없어서 애초에 정상적으로 종료할 수가 없을 때
// 이 함수 자체가 반환할 값이 있다는 것이 모순일 때 사용

function fun3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}
