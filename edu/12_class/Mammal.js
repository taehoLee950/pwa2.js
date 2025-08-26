class Mammal {
  _name;
  _residence;

  constructor(name, residence) {
    this._name = name;
    this._residence = residence;
  }

  breath() {
    console.log(`${this._name}가 폐 호흡 합니다.`);
  }
}

class Whale extends Mammal {
  // _name;
  // _residence;

  // constructor(name, residence) {
  //   this._name = name;
  //   this._residence = residence;
  // }

  // breath() {
  //   console.log(`${this._name}가 폐 호흡 합니다.`);
  // }
  constructor(name, residence) { //자식요소가 부모 constructor 불러오기.
    super(name, residence);
  }

  // 오버라이딩
  breath() {
    console.log('고래고래 소리칩니다');
  }

  swimming() {
    console.log(`${this._name}가 헤엄칩니다.`)
  }
}

class FlyingSquirrel extends Mammal {
  // _name;
  // _residence;

  // constructor(name, residence) {
  //   this._name = name;
  //   this._residence = residence;
  // }

  // breath() {
  //   console.log(`${this._name}가 폐 호흡 합니다.`);
  // }

    constructor(name, residence) {
    super(name, residence);
  }

  flying() {
    console.log(`${this._name}가 날아갑니다.`)
  }
}

const whale = new Whale('고래', '바다');
whale.swimming();

// 오버라이딩 호출
whale.breath();