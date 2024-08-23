let a = 1;
let b = 2;
let t = a;
a = b;
b = t;
console.log("🚀 old - a b:", a, b);

a = 1;
b = 2;
[b, a] = [a, b];
console.log("🚀 new - a b:", a, b);

console.log("------------------------");
const arr = [1, 2]; // arr의 시작 주소가 const 인 것!!

[arr[0], (arr[1] = arr[1]), arr[0]];
console.log("🚀  arr:", arr);
