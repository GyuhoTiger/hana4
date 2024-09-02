const assert = require("assert");
const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const ex1 = arr2.slice(1, 3);
console.log("🚀  ex1)", ex1);

// ex2) [3]부터 모두 다 추출
const ex2 = arr2.slice(2);
console.log("🚀  ex2)", ex2);

// ex3) [2,3,4] 제거하기
arr2.splice(1, 3);
console.log("🚀  ex3)", arr2);

// ex4) 복원하기
arr2.splice(1, 0, 2, 3, 4);
console.log("🚀  ex4)", arr2);

// ex5) [3] 부터 끝까지 제거하기
arr2.splice(2);
console.log("🚀  ex5)", arr2);

// ex6) 복원하기
arr2.splice(2, 0, 3, 4, 5);
console.log("🚀  ex6)", arr2);

// ex7) [1, 2, 'X', 'Y', 'Z', 4, 5] 만들기
arr2.splice(2, 1, "X", "Y", "Z");
console.log("🚀  ex7)", arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
arr2.splice(2, 3, 3);
console.log(" 배열 복원:", arr2);
console.log("🚀  ex8)", [...arr2.slice(0, 2), "X", "Y", "Z", 4, 5]);

// ex9) objs의 각 원소를 reduce를 이용하여 합쳐보세요.
const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
const obj = objs.reduce((acc, o) => ({ ...acc, ...o }));
console.log("🚀  obj:", obj);
assert.deepStrictEqual(obj, { id: 5, name: "Hong", addr: "Seoul" });
