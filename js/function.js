function f() {
  console.log("f>>", this, name);
}

f();
f.bind({ name: "Binding" })();
f();

f.call({ name: "Binding" });

const f2 = f;
const f3 = f;
