const user = {
  "": 1,
  " ": 1,
  123: 1,
  12345n: 2,
  true: 1,
  id: 2,
  [`name`]: "Hong",
  [Symbol()]: "Hong",
  [`${new Date()}`]: 365,
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`,
  getInfo() {
    return `${this.id}-${this.name}`;
  },
};

console.log("🚀  user:", user);
console.log(">>", user["123"]);
console.log(">>", user[12345n]);

// const keys = Object.keys(user);
const keys = Reflect.ownKeys(user);

console.log("🚀  keys:", keys);
console.log("🚀  sym:", user[keys[keys.length - 1]]);

let symbolKey;
for (let i = 0; i < keys.length; i++) {
  const typ = typeof keys[i];
  console.log(key[i], "=>", typ);
  if (typ == "symbol") {
    symbolKey = keys[i];
  }
}

console.log("Symbol>>>", user[symbolKey]);
console.log("****>>", user.getInfo());

user.addr = "Seoul";
console.log("🚀  user:", user);

// delete user.addr
console.log(
  "addr" in user,
  user.hasOwnProperty("addr"),
  Reflect.has(user, "addr")
); //true true

console.log("user.getOwnPropSym>", Object.getOwnPropertySymbols(user));
