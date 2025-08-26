
class 기본 구조
class MyClass {
  add(a, b) { // class에 들어가는 method는 'function' 함수 선언 생략한다.
    return a + b;
  }
}

const myClass = new MyClass; // 객체 인스턴스
let addNum = myClass.add(5, 10); // argument입력, method 호출
console.log(addNum);


// 객체의 property
class MyClass {
  // 접근 제어자들
  name = 'Lee';         //  *public : 클래스 내부, 외부 어디서든 접근 가능.
   #age = 30;           //  *private : 클래스 내부에서만 접근 가능.
  _addr = 'Mars'        // *protected : 상속관계에서 나(me)랑 자식클래스는 접근 가능,

  static gender = 'M';  // *정적 (메모리 계속 먹고있음)

  // 생성자 메소드
  // 'new' 키워드로 객체를 인스턴스화 할때 딱 한번 실행되는 메소드
  // 얘를 통해서 객체 인스턴스 속성에 값을 초기화 or 할당 가능
  constructor(name, age, addr) {
    this.name = name;
    this.#age = age;
    this._addr = addr;
  }
  // getter / setter
  // property 처럼 다뤄짐.
  // 함수인데 함수처럼 myClass.age() 이런식으로 접근 안함
  // property 처럼 myClass.age 로 접근한다.
  get age() { //getter
    return this.#age;
  }
  set age(age) { //setter (parameter) 필요
    this.#age = age;
  }
  // 인스턴스 메소드
  add(a, b) {
    return a + b;
  }
}

const myClass = new MyClass('홍길동', 20, '조선');
const myClass2 = new MyClass('갑순이', 5000, '미국')  //자식객체 myClass2 가 생성되서 부모 속성을 상속받음.
console.log(myClass.name);
console.log(myClass2.name);
console.log(myClass.age) // getter 호출