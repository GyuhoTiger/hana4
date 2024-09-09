const assert = require("assert");

// JS 263p

const regexp = /senior|coding/gi;
if (regexp.test("Junior Developer")) console.log("OK");
if (regexp.test("Senior Developer")) console.log("OK"); // OK , last index가 -1에서 시작해서 Senior에서 6으로 끝남
if (regexp.test("JS Coding")) console.log("OK"); // regexp의 인덱스는 6이 된 상태, "JS Coding"에서 중간부터 인덱스가 시작되므로 coding이 포함되어도 못찾음
if (regexp.test("JavaScript Coding")) console.log("OK"); // OK

// Ex1) 오른 쪽과 같은 형태로 출력하는 fmt 함수를 작성하시오. // 주 문 합 계 :   45,000원

const fmt = ([label, unit], price) =>
  `${label}${price.toLocaleString().padStart(9)}${unit}`;

const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}냥`);
function fmt([label, unit], price) {
  return `${label}${price.toLocaleString().padStart(9)}${unit}`;
}

// Ex2-1) 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.

const ㄱ = "ㄱ".charCodeAt();
const ㅎ = "ㅎ".charCodeAt();
const 가 = "가".charCodeAt();
const 힣 = "힣".charCodeAt();
const 자음알파벳숫자 = [..."LMNRlmnr136780"].map((a) => a.charCodeAt());

function isEndJaum(str) {
  const s = str.charCodeAt(str.length - 1);
  // console.log('🚀  s:', s, str.charCodeAt(str.length - 1));
  console.log(str, s - 가, (s - 가) % 28, 자음알파벳숫자.includes(s));
  // if (s >= ㄱ && s <= ㅎ) return true;
  // if (자음알파벳숫자.includes(s)) return true;

  return (
    (s >= ㄱ && s <= ㅎ) ||
    자음알파벳숫자.includes(s) ||
    (s >= 가 && s <= 힣 && (s - 가) % 28 !== 0)
  );

  // return (
  //   (s - 가) % 28 !== 0 &&
  //   ((s >= ㄱ && s <= ㅎ) || 자음알파벳숫자.includes(s))
  // );
}

// console.log(isEndJaum('북한강'));
// console.log(isEndJaum('아점수 A'));
// return;
assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
// assert.equal(isEndJaum('ㅜㅜ'), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
assert.equal(isEndJaum("24"), false);
assert.equal(isEndJaum("23"), true);

// Ex2-2) 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.

// Ex3) 초성 검색을 하는 search함수를 정규식을 이용하여 작성하시오.

// Ex4-1) 문자열 str에서 대문자는 소문자로, 소문자는 대문자로 변환하세요.

function upperToLowerX(str) {
  // return str.replace(/([A-Z])/g, '*$1*-');
  return str.replace(/[A-Z]/g, (matchedStr) => {
    return `*${matchedStr.toLowerCase()}*-`;
  });
}

const upperToLower = (str) =>
  str.replace(/[A-Z]/g, (matchedStr) => `*${matchedStr.toLowerCase()}*-`);

assert.strictEqual(
  upperToLower("Senior Coding Learning JS"),
  "*s*-enior *c*-oding *l*-earning *j*-*s*-"
);

const swapCase = (str) =>
  str.replace(/([A-Z]*)([a-z]*)/g, (_matchedStr, upper, lower) => {
    return `${upper.toLowerCase()}${lower.toUpperCase()}`;
  });
console.log("🚀  swapCase:", swapCase("Senior Coding LEArning JS"));

assert.equal(
  swapCase("Senior Coding Learning JS"),
  "sENIOR cODING lEARNING js"
);
assert.equal(swapCase("Hanaro 4 Class"), "hANARO 4 cLASS");
assert.equal(swapCase("HeLLo WoRLd"), "hEllO wOrlD");

// Ex4-2) 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
