const user = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };

function ex1() {}

function ex2() {
  // 정답1 const { passwd, ...userInfo } = user;
  /* 정답2 
  const userInfo = { ...user };
  delete userInfo.passwd; */
  console.log(user);
}

function ex3() {
  const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
  const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;
  console.log(id1, id2, id3);
  // 출력 결과 1,2,3
}

function ex4() {
  function getValueExceptInitial(k) {
    const { [Symbol()]: val } = user;
    // const [, ...ret] = [...val];
    const [, ...ret] = val;
    return ret.join("");
  }
  console.log(getValueExceptInitial("name")); // 'ong'
  console.log(getValueExceptInitial("passwd")); // 'yz'
  console.log(getValueExceptInitial("addr")); // 'eoul'
}

function ex5() {
  user.f = function () {
    console.log("ffff", this.name);
  };
  console.log("🚀  user:", user);
  user, f();
  const { f: xf } = user;
  xf();
}
