// 함수 (function)
// 외부로부터 input을 받아 output을 내는 일련의 과정을 정의한 것

// 함수 선언식
// parameter : 외부로부터 입력받은 값을 저장하는 '변수'
function fn1(a, b) {
  return a + b;
}

// argument : 함수를 호출할 때 전달 해주는 값
// 1 -> a 로 들어감, 2 -> b로 들어감
let resultFn1 = fn1(1, 2);
console.log(resultFn1); 

console.log(fn1(2, 3));

// 함수 선언식 : 호이스팅에 영향을 받는다.
// 재할당이 가능하므로 함수명이 중복되지 않도록 조심해야된다.
function fn3(a, b) {
  return a + b;
}

// 함수 표현식 : 호이스팅에 영향을 받지 않음
const fnc4 = function() {
  return a + b;
}

// 화살표 함수 (line 24 ~ 26의 축약형)
const fnc5 = (a, b) => a + b;

//아래 함수 표현식을 화살표 함수로 바꿔보자
const fnc6 = function(a) { 
  let test = a / 2;
  return test;
}
//위의 함수가 화살표 함수로 바뀐 모습, 여기서 parameter값 '( )' 생략 가능
const fnc7 = (a) => {
  let test = a / 2;
  return test;
}

// 콜백(call-back) 함수
// 다른 함수의 파라미터로 전달되어서 특정 조건에 따라 호출되는 함수
function myChk(callback) {
  callback();
}
// 아래처럼 이름이 없는 함수를 익명함수라고 부른다 (단발성)
const test11 = () => console.log('콜백함수');
myChk(test11);