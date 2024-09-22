/* --- unknown type --- */
// unknown 타입은 모든 타입의 슈퍼타입
// 모든 타입은 unknown 타입의 부분 집합
// unknown 타입은 모든 타입은 부분 집합으로 가지는 타입스크립트 전체 집합

function unknownExam(): void {
  let a: unknown = 1; // 업캐스팅
  let b: unknown = "hello"; // 업캐스팅
  let c: unknown = true; // 업캐스팅
  let d: unknown = null; // 업캐스팅
  let e: unknown = undefined; // 업캐스팅

  let unKnownVar: unknown;

  // let num:number = unKnownVar // 다운캐스팅
  // let str:string = unKnownVar // 다운캐스팅
  // let bool:boolean = unKnownVar // 다운캐스팅
}

/* --- never type --- */
// 공집합 : 아무것도 없는 집합
// 모든 타입의 서브 타입 (부분 집합)
// 어떤 값도 저장되어서는 안 되는 변수에 활용하면 아주 좋음

function neverExam() {
  const neverFunc = (): never => {
    while (true) {}
  };

  let num: number = neverFunc(); // 업캐스팅
  let str: string = neverFunc(); // 업캐스팅
  let bool: boolean = neverFunc(); // 업캐스팅

  // let never1:never = 10; // 다운캐스팅
  // let never2:never = 'hello' // 다운캐스팅
  // let never3:never = true // 다운캐스팅
}

/* --- void type --- */

function voidExam(): void {
  const voidFunc = (): void => {
    console.log("hello world");
    return undefined;
  };

  let voidVar: void = undefined;
}

/* --- any type --- */
//

function anyExam() {
  let unKnownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unKnownVar; // 다운캐스팅 OK
  anyVar = undefinedVar; // 다운캐스팅 OK

  //   anyVar = neverVar
}
