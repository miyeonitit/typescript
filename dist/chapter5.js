// enum
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "박미연",
    role: Role.ADMIN, // admin
};
const user2 = {
    name: "홍길동",
    role: Role.USER, // common user
};
const user3 = {
    name: "아무개",
    role: Role.GUEST, // guest
};
console.log(user1, user2, user3);
export {};
