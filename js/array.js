const assert = require("assert");
const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

const users = [hong, kim, lee, park];

//
const idxKim = users.indexOf(kim);
console.log("🚀  idxKim:", idxKim);

//----------------------------------

const find3 = (a) => a.id == 3;

//
const idxId2 = users.findIndex(find3);
console.log("🚀  idxId2:", idxId2);

//
const idxId1 = users.findLastIndex(find3);
console.log("🚀  idxId1:", idxId1);

//
const findId = (id) => (a) => a.id == id;
const idxId3 = users.findIndex(findId(2));
console.log("🚀  idxId3:", idxId3);

console.log("--------------------------");

users.forEach((a) => console.log(a.id, a.name));

const arr = [1, 2, 3, 4, 5];
const isOdd = (n) => n % 2 != 0;
for (const val of arr) {
  console.log(isOdd(val));
}
const ret = arr.forEach((a) => console.log(a, isOdd(a)));

const kim2 = users.find((user) => user.name == "Kim");
console.log("🚀  kim2:", kim2);

const Hong2 = users.findLast((user) => user.name == "Hong");
console.log("🚀  Hong2:", Hong2);

const hasIUsers = users.filter((user) => user.name.includes("i"));
console.log("🚀  hasIUsers:", hasIUsers);

const names = users.map((user) => user.name);

//---------------------------------------------------------------------
// check prime number
// 1) 소수를 가지고 있는지

const makeArray = (cnt, startNum = 1) =>
  Array.from({ length: cnt }, (_, i) => i + startNum);

// 반복문을 이용한 소수 구하기
/* function isPrimeNormal(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
} */

const isPrime = (n) => {
  if (n === 1) return false;
  // return Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
  return makeArray(Math.sqrt(n) - 1, 2).every((a) => n % a !== 0);
};

// console.log(arr.map(a => [a, isPrime(a)]));

const hasPrime = (arr) => arr.some(isPrime);

assert.strictEqual(hasPrime([1, 2, 3]), true);

const primeNumbers = (arr) => arr.filter(isPrime);

assert.deepStrictEqual(primeNumbers(arr), [2, 3, 5]);

const arr100 = makeArray(100);
console.log("🚀  arr100:", arr100);
assert.deepStrictEqual(
  primeNumbers(arr100),
  [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ]
);
