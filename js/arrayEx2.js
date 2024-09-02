/* // Ex1) 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.

const assert = require("assert");

const arr = [1, 2, 3, 4];
const push = (arr, ...args) => [...arr, ...args];
const pop = (arr, idx = 1) => {
  const result = arr.slice(-idx);
  if (result.length == 1) return [0];
  return result;
};
const unshift = (arr, ...args) => [...args, ...arr];
const shift = (arr, idx = 1) => arr.slice(idx);

assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);

// ______________________________________________________

// Ex2) 다음과 같은 deleteArray를 순수 함수로 작성하시오.

const arr2 = [1, 2, 3, 4];
const deleteArray = (arr, start, end = Infinity) =>
  arr.filter((a, i) => i < start && i > end);
assert.deepStrictEqual(deleteArray(arr2, 2), [1, 2]);
return;
assert.deepStrictEqual(deleteArray(arr2, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);



const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

// Ex3) 아래 users 배열에 대하여 추가/수정/삭제하는 순수 함수를 작성하시오.
 */

// Ex6) 다음과 같은 정수 배열이 주어졌을 때, reduce를 이용하여, 각 요소를 다음의 순서로 처리하시오. (1회전으로 처리!)

const aJobs = [square, sqrt, cube];
const bJobs = [cube, square];
const robot = (arr, jobs) =>
  assert.deepStrictEqual(robot(arr, aJobs), [1, 8, 27, 64, 125]);
assert.deepStrictEqual(robot(arr, bJobs), [1, 64, 729, 4096, 15625]);
