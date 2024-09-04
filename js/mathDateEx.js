const assert = require("assert");

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
// Ex1) 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

function ex1() {
  const d1 = new Date("1970-01-01T00:00:00.000Z");
  const d2 = new Date("1970-01-02T00:00:00.000Z");

  return (d2.getTime() - d1.getTime()) / 1000;
}

console.log(ex1());

// Ex2) 이 달의 날짜 5개를 무작위(rand)로 만들어 역순으로 정렬하시오.

function ex2() {
  const d = new Date();
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  const lastDate = d.getDate();
  let randDates = [];
  do {
    const rdate = rand(1, lastDate);
    if (!randDates.includes(rdate)) randDates.push(rdate);
  } while (randDates.length < 5);

  return randDates.sort((a, b) => (a > b ? 1 : -1));
}

const ret2 = ex2();
console.log(ex2());
let prev = ret2[0];
for (let i = 1; i < ret2.length; i++) {
  assert.equal(prev < ret2[i], true);
  prev = ret2[i];
}

// Ex3) 내년(2025년)의 오늘(9월 3일)의 요일을 출력하시오.

const nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);
const nextYearWeek = "일월화수목금토"[nextYear.getDay()];
console.log("🚀  nextYearWeek:", nextYearWeek);

// Ex4) 오늘(9월 3일)로 부터 100일 후의 날짜는?

const after100 = new Date();
after100.setDate(after100.getDate() + 100);
console.log("🚀  after100:", after100.toLocaleDateString());

// Ex5) 현재 날짜(또는 특정 날짜를 받으면 해당 월)의 달력을 출력하시오.(node cal.js)

// Ex6-1) 지난 번 subject.html에서, 국어 수업은 debounce로 클릭하고, 수학 수업은 throttle로 클릭하도록 구현하시오.(각 0.5초 딜레이)

// Ex6-2) 지난 번 ttt.html에서, 검색어 입력 상자를 만들고, 입력에 0.5초 debounce 걸기 - 검색(출력).
