let num1 = 10; // number type
let num2 = 10; // number literal type
// num1 (number type) : 슈퍼 타입 (부모 타입)
// num2 (number literal type) : 서브 타입 (자식 타입)
num1 = num2; // OK (업캐스팅) : 서브 타입을 슈퍼 타입으로 취급
num2 = num1; // error (다운캐스팅) : 슈퍼 타입을 서브 타입으로 취급
export {};
