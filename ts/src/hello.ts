const myName: string = "Gyuho";
const myAge: number = 20;
console.log(`Hello, ${myName}!`);
console.log(`${myAge} years old!`);

let x: number | string;
x = 1;
console.log("🚀  x:", x);

x = "abc";
console.log("🚀  x:", x);

const len = x.length;

let y: number | undefined = undefined;
console.log("🚀  y:", y);
