// 변수 : 변하는 데이터를 저장하기 위한 공간
var variableName = '제육';
let letName = '햄버거';
var var2;
var2 = 0;

// 상수 : 최초에 대입한 값이 절대 변하지 않는 것
const const1 = '뚝불';
// const1 = 'asd';  값 재지정 불가

// var를 지양하는 이유 3가지
// 1. 같은 이름으로 중복 선언이 가능하다.
var name = '홍길동';
var name = '갑돌이';

// 2. 코드 구조상 변수 선언보다 사용을 먼저 할 경우, 오류가 발생하지 않고 접근 가능한 현상 (호이스팅 문제)
// dev tool 에서 let과 비교해서 보면 확인가능
// console.log(age);
// let age = 20;

// 3. var는 기본적으로 함수 레벨 스코프를 가진다
// 스코프의 종류 : 전역 스코프, 지역 스코프, 블록레벨 스코프
var globalVar = 'globalVar';
let globalLet = 'globalLet';
const globalConst = 'globalConst';

// 전역 스코프 
// 아래 보다시피 어디서나 접근이 가능.
function test() {
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);
}

test();

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// 지역 스코프 (함수 내 선언) 예시
// line 52 ~ 54 console.log로 함수내의 local 변수들을 불러내는건 가능 
// 함수 밖에서 consloe.log로 지역레벨을 부르려 하면 dev tool에서 에러가 남
function test() {
  var localVar = 'localVar';
  let localLet = 'localLet';
  const localConst = 'localConst'
  console.log(globalVar);
  console.log(globalLet);
  console.log(globalConst);

  console.log(localVar)
  console.log(localLet)
  console.log(localConst)
}

test();

// 블록 레벨 스코프 예시
if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet';
  const blockConst = 'blockConst';
}

console.log(blockVar);
console.log(blockLet);
console.log(blockConst);