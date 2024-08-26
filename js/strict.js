"use strict"; // 왜 정의를 안해?라고 하는 것 -> 선언 안된 것은 오류를 출력

// var aaa = 1; // 원래는 선언 안하면 자동으로 var로 선언
// console.log("🚀  aaa:", aaa);

function f(a, ax) {
  console.log("outer f", a);
}

f(10);
{
  function f(a) {
    var v;
    {
      const b = 1;
      v = 5;
    }
    console.log("block f", a, v, b);
  }
  f(100);
}
f(200);

function f(a) {
  console.log("***************");
}
