// 연습문제 134p ~ 136p
const arr = [100, 200, 300, 400, 500, 600, 700];

// Ex1-1) 배열의 인덱스 출력

console.log("배열의 인덱스 출력");
for (const key in arr) {
  console.log("배열의 인덱스: ", key);
}

console.log("---------------------------------");

// Ex1-2) 배열의 원소 출력

console.log("배열의 원소 출력");
for (const key in arr) {
  console.log("배열의 원소: ", arr[key]);
}

console.log("---------------------------------");

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

// Ex1-3) 프로퍼티 이름 출력

console.log("프로퍼티 이름 출력");
for (const key in obj) {
  console.log("프로퍼티 이름: ", key);
}

console.log("---------------------------------");

// Ex1-4) 프로퍼티 값 출력

console.log("프로퍼티 값 출력");
for (const key in obj) {
  console.log("프로퍼티 값: ", obj[key]);
}

console.log("---------------------------------");

// Ex1-5) 프로퍼티 값 출력(for-of 이용)

console.log("프로퍼티 값 출력(for-of 이용)");
for (const key of Object.values(obj)) {
  console.log("프로퍼티 값: ", key);
}

console.log("---------------------------------");

// Ex1-6) level 프로퍼티가 열거되지 않도록 설정

Object.defineProperty(obj, "level", {
  enumerable: false,
});

console.log("level 프로퍼티가 열거되지 않도록 설정");
console.log("level 프로퍼티:", Object.getOwnPropertyDescriptor(obj, "level"));

console.log("---------------------------------");

// Ex1-7) role 프로퍼티는 읽기전용으로 설정

Object.freeze(obj, "role");

console.log("role 프로퍼티는 읽기전용으로 설정");
console.log("role 프로퍼티:", Object.getOwnPropertyDescriptor(obj, "role"));

console.log("\n", "*********************************", "\n");

const data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

// Ex2-1) [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오

function makeObjectFromArray(array) {
  const retObj = {};
  for (const [key, ...vals] of array) {
    retObj[key] = vals;
    // retObj[a[0]] = [a[1], a[2]];
  }
  return retObj;
}

console.log("배열 -> 객체");
console.log(makeObjectFromArray(data));
console.log("---------------------------------");

// Ex2-2) 위에서 만든 객체를 다시 배열로 만드시오.

function makeArrayFromObject(obj) {
  const result = [];
  for (const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}
console.log("객체 -> 배열");
console.log(makeArrayFromObject(obj));
console.log("\n", "*********************************", "\n");

// Ex3) 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 또는 spread(...) 연산자를 사용하지 말고 작성하시오.

// 얕은 복사(shallow copy)
function shallowcopy(obj) {
  const Kim = { nid: 3, nm: "Kim", addr: "Pusan" };
  const newKim = {};
  for (const k in Kim) {
    newKim[k] = Kim[k];
  }
  newKim.addr = "Daegu";

  console.log("shallow");
  console.log(Kim.addr !== newKim.addr);
  console.log("Kim:", Kim);
  console.log("newKim:", newKim);
  console.log("---------------------------------");
}
shallowcopy();

// 깊은 복사(deep copy)
const assert = require("assert");
function isObject(obj) {
  return obj && typeof obj === "object";
}

const KIM = { nid: 3, nm: "Kim", addr: { city: "Pusan" }, [Symbol()]: "sym" };
function copyObject(obj) {
  if (!isObject(obj)) return obj;

  const newer = {};
  for (const k of Reflect.ownKeys(obj)) {
    newer[k] = copyObject(obj[k]);
  }
  // for (const k in obj) {
  //   newer[k] = copyObject(obj[k]);
  // }

  // const symbols = Object.getOwnPropertySymbols(obj);
  // console.log('🚀  symbols:', symbols);
  // for (const symKey of symbols) {
  //   newer[symKey] = obj[symKey];
  // }

  return newer;
}

const newKim = copyObject(KIM);
assert.deepStrictEqual(KIM, newKim);
newKim.addr.city = "Daegu";
assert.notDeepStrictEqual(KIM, newKim);
console.log("shallow>>", KIM.addr.city !== newKim.addr.city); // true면 통과!
console.log("🚀  kim newKim:", KIM, newKim);
