// Ex1) 함수를 한번만 실행하게 하는 once 함수를 작성하시오
/* 
const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

function once(f) {
  let done = false;
  return (...args) => !done && ((done = true), f(...args));
  return (...args) =>
    !done &&
    setTimeout(() => (done = !done), rebirthDelay) &&
    ((done = false), f(...args));
} */

// Ex2) template 함수를 작성하세요

const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template =
  (fn) =>
  (...args) => {
    return (...args) => {
      before(); // 'before' 함수 실행
      fn(...args); // 원래의 함수 실행
      after(); // 'after' 함수 실행
    };
  };

const temp = template(someFn);
const temp2 = template(someFn2);

temp("sico", "hello");
temp2(1, "sico", "sico@gmail.com", 5);

