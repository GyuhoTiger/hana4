// ex1)
for (let i = 1; i <= 10; i += 1) {
  //console.log(i / 10);
  console.log(i.toFixed(1))
}

// ex2)
/* for (let i = 1; i <= 10; i += 1) {
    if(i % Math.sqrt(i) != 0){
        console.log(i, Math.sqrt(i).toFixed(3)); 
    }
} */

// ex3)

/* const WEEK_NAMES = "일월화수목금토";
const today = new Date();
const todayWeek = today.getDay();
switch (todayWeek) {
  case 0:
    console.log("오늘은 일요일입니다.");
    break;
  case 1:
    console.log("오늘은 월요일입니다.");
    break;
  case 2:
    console.log("오늘은 화요일입니다.");
    break;
  case 3:
    console.log("오늘은 수요일입니다.");
    break;
  case 4:
    console.log("오늘은 목요일입니다.");
    break;
  case 5:
    console.log("오늘은 금요일입니다.");
    break;
  case 6:
    console.log("오늘은 토요일입니다.");
    break;
} */

// ex4)
/* addPoints(0.34, 0.226);

function addPoints(a, b) {
  const length = Math.max(a.toString().length, b.toString().length);
  const answer = (a + b).toFixed(length - 2);
  console.log(answer);
}

/* 
addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)       // 0.42
addPoints(0.34, 0.226)     // 0.566 */

// ex5)
/* 
printIrr(5);

function printIrr(a) {
  console.log(a, Math.sqrt(a).toFixed(3));
  a += 1;
  while (a % Math.sqrt(a) != 0) {
    console.log(a, Math.sqrt(a).toFixed(3));
    a += 1;
  }
} */


  