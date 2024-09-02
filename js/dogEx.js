// My name is undefined.
const dog = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName, 1000);
  },
};
dog.whatsYourName();

// 1. 고전적 방법
const dog2 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    var self = this;
    setTimeout(function () {
      self.showMyName();
    }, 1000);
    // setTimeout(() => this.showMyName(), 1000);
  },
};
dog2.whatsYourName();

// 2. 화살표 함수 사용 , 화살표함수는 this를 갖지 못하므로 부모의 스코프의 this가 된다, 이 때 const는 블록이 아님 주의, 그래서 this.name = Maxx가 된다.
const dog3 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};
dog3.whatsYourName();

// 3. binding
const dog4 = {
  name: "Maxx",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(this.showMyName.bind(this), 1000);
  },
};
dog4.whatsYourName();
