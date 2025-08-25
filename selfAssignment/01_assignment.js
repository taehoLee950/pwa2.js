// 실습 문제 1
// const scores = [85, 42, 97, 64, 58, 71];
// 이 배열에서 60점 이상인 점수만 뽑아서 새로운 배열을 만드세요.
// 그 배열의 평균 점수를 구하세요.
const scores = [85, 42, 97, 64, 58, 71];

const scoreAbove60 = scores.filter(score => score >= 60); // 60점 '이상' 이므로 >= 사용
console.log(scoreAbove60); // 60점 이상 요소 배열로 저장

// 60점 이상 값이 모인 새로운 배열 루프를 돌아 total 값을 구함.
const total = scoreAbove60.reduce((acc, cur) => acc + cur, 0); // acc = 초기값 0, 
console.log(total); // 총합 317

// 이제 평균 구하기
// *주의 : scores 변수가 아니고 scoreAbove60의 length로 지정해야 60점이상 값들만 평균을 낼수있음
const avg = total / scoreAbove60.length;
console.log(avg); // 79.25

// abs 값으로 바꿔주기
const finalAvg = Math.round(avg)
console.log(finalAvg);

// 요약-
// filter(), reduce() 사용 함.
// filter()로 배열에 루프를 돌아 60점이상 요소들만 꺼내 새로운 배열을 만듬.
// reduce()를 사용하여 acc(초기값=0) parameter 에다가 60점 이상 점수들의 누적값을 넣음.
// 평균을 구하는데 여기서 60점 이상 점수들만 평균을 구할거니 60점 이상 모여있는 'scoreAbove60' 변수를 length로 잡음.
// 최종적으로 Math 객체의 round 메써드를 이용하여 정수로 변환.

// 개선점
// 1. line 12에 보면 .reduce의 2번째 parameter로 'scoreAbove60' 변수명을 그대로 넣었는데, 그냥 cur으로 넣어도 된다.
//      왜냐? .reduce 메써드가 'scoreAbove60'를 명확하게 짚고 있으니 파라미터로 해당 배열을 자동으로 arg로 받아오기 때문에.



// -----------------------------------------------------------------------------------------------------------------------
// 실습문제 2
// 아래 배열에서 "banana"의 인덱스를 구해서 출력한 뒤,
// 그 요소를 배열에서 제거하고 업데이트된 배열을 출력하세요.
// 조건
// indexOf()와 splice()를 사용하세요.
// 콘솔에 두 줄이 찍히도록: 첫줄 - 바나나의 인덱스 번호 / 두번째 - 바나나가 빠진 새로운 배열.
// banana의 인덱스 제거 후 배열
const fruits = ["apple", "banana", "cherry", "orange"];

// 바나나의 인덱스 번호 구하기
const idxNum = fruits.indexOf('banana');
console.log(idxNum);

// 제거된 요소로 새로운 배열 반환
const withoutBanana = fruits.splice(idxNum, 1);
console.log(withoutBanana);

// 바나나 빠졌는지 확인
console.log(fruits);


// 요약
// 바나나의 index# 구함.
// line52 : splice에 바나나의 인덱스 값과 그 인덱스 값으로부터 몇개의 요소를 잘라낼지 넣음.
// 바나나가 빠진 원본 배열을 확인

// 개선점
// splice를 사용하면 특정 요소가 빠진 '원본'배열을 리턴값으로 주는게 아니고, 잘린 요소만 모아서 리턴을 함
// 그래서 요소가 기존 배열에서 잘 빠졌나 확인을 하려면 splice가 저장된 변수를 보는게 아닌, 원본 배열을 봐야 그 요소가 빠졌는지 확인이 전체적으로 가능하다
// 근데 나는 line52 ~ 53에 'withoutBanana` 변수에 splice를 사용하고, 
// "어? 왜 without인데 너 왜 only 바나나가 된거니?? ㅋㅋ 다른 얘들은 어디가고." 이렇게 된거임.


// 실습문제 3
// 퀴즈 2
// 아래 배열이 있습니다:
// const nums = [3, 8, 12, 5, 7, 10];
// 요구사항
// filter()를 사용해서 짝수만 담긴 새로운 배열을 만드세요.
// 그 배열의 모든 값을 2배로 바꾼 새로운 배열을 map()으로 만드세요.
// 최종 배열을 콘솔에 출력하세요.
const nums = [3, 8, 12, 5, 7, 10];

// 짝수 요소로 새로운 배열 만들기
const evenNum = nums.filter(even => even % 2 === 0);
console.log(evenNum); // 리턴값: 8, 12, 10

// 짝수 요소 값 x 2
const multipliedBy2 = evenNum.map(val => val * 2);
console.log(multipliedBy2);

// map()을 이용한 삼항 연산자 예시
const evenNumToText = nums.map(val => val % 2 ===0 ? "짝수":"홀수");
console.log(evenNumToText);

// 요약
// filter() : 반환값 true || false. true 인 요소만 빼와서 배열을 다시 만들기때문에 배열 길이가 다를 수 있음.
// map() : 반환값 X. 조건식에 맞는 요소만 반환 또는 transform 한다.
// 그래서 원본 배열의 길이를 똑같이 가지면서 같은 요소들만 바꾸고 싶을때는 map()과 삼항연산자 ' ? "" : "" ' 를 써야한다.


// -----------------------------------------------------------------------------------------------
// 실습문제 4
// 아래 배열이 있습니다:
// const words = ["I", "love", "JavaScript"];
// 요구사항
// 배열을 "-"로 연결해서 하나의 문자열로 변환하세요.
// 결과를 콘솔에 출력하세요.
const words = ["I", "love", "JavaScript"];

// separator인 join()을 사용해볼까?
const combnedWords = words.join('-');
console.log(combnedWords);

// ------------------------------------------------------------------------------------------------------
// 실습문제 5
// 아래 배열이 있습니다:
// const scores = [55, 90, 78, 62, 88, 100, 47];
// 요구사항
// sort()를 이용해서 오름차순 정렬하세요.
// 원본배열은 바꾸지 마세요.
// 정렬된 배열에서 filter()를 이용해 80점 이상만 뽑은 새 배열을 만드세요.
// 그 결과를 콘솔에 출력하세요.

const order = [55, 90, 78, 62, 88, 100, 47];

// 원본 배열 복사 및 오름차순 정렬까지 한번에.
const orderCopy = [...order].sort((a, b) => a - b);
console.log(orderCopy);

//80점 이상 요소를 뽑아 새 배열 생성
const scoreAbove80 = orderCopy.filter(score => score >= 80);
console.log(scoreAbove80);


// ------------------------------------------------------------------------------------------------------
// 아래 배열이 있습니다:
// const numbers = [2, 4, 6, 8, 10];
// 요구사항
// every()를 사용해서 이 배열의 모든 숫자가 짝수인지 확인하세요.
// some()을 사용해서 이 배열에 5가 포함되어 있는지 확인하세요.
// 두 결과를 콘솔에 각각 출력하세요.
const numbers = [2, 4, 6, 8, 10];

// 요소 짝수 확인
const evenChk = numbers.every(val => val % 2 === 0); // every() : 모든 요소가 true 일때 true 출력
console.log(evenChk);

// 배열 요소에 5가 포함되어 있는지 확인
const numFiveChk = numbers.some(val => val === 5); // some() : 배열 요소에 조건식에 맞는값이 하나라도 있을 시 true 출력
console.log(numFiveChk);


// ------------------------------------------------------------------------------------------------------
// 아래 배열이 있습니다:
// const users = [
//   { name: "태호", age: 30 },
//   { name: "민수", age: 25 },
//   { name: "지영", age: 28 },
//   { name: "수진", age: 22 }
// ];
// 요구사항
// filter()를 사용해서 나이가 26세 이상인 사용자만 뽑아 새로운 배열을 만드세요.
// 그 배열에서 map()을 사용해서 사용자 이름만 담긴 배열을 만드세요.
// 최종 이름 배열을 콘솔에 출력하세요.

const users = [
  { name: "태호", age: 30 },
  { name: "민수", age: 25 },
  { name: "지영", age: 28 },
  { name: "수진", age: 22 }
];

// 26세 이상 유저만 골라내어 새로운 배열 생성
const above26yrs = users.filter(users => users.age >= 26); //parameter (users)의 이름과 조건식의 이름이 같아야 argument값으로 조건식 생성가능
console.log(above26yrs);

// 나이제거 후 이름만 출력
const printName = above26yrs.map(users => users.name);
console.log(printName);

// 또는 destructuring 문법
const printName2 = above26yrs.map(({ name }) => name);
console.log(printName2);

//요약
// line 171: filter()를 사용해서 객체의 age 속성값이 26이상인 객체를 모아 새로운 배열로 만듬
// line 175: 그 새로운 배열을 argument로써 받아 객체 속성에 들어가는 문법인 objectName.keyName 을 사용해서 이름만 출력
// line 179: destructuring 문법인데 이게 좀 복잡하니 설명을 길게할거임.
//              우리가 메써드에 parameter 값으로 받는 구역에 '{ }'를 넣게되면 js는 이것을 '코드블록' (예: 함수 { 여기에 들어가는 코드 })라고 인식을 함.
//                 그게 아니고 얘는 parameter이고 그 parameter에 들어올 argument의 data 값은 '객체'라고 인식을 시켜줘야 함.
//                    그래서 저기 line 179에 보면 ( ( { parameter:객체 } ) ) 이런식으로 { } 중괄호 밖에 ( )소괄호를 하나 더 넣어 객체로 인지시켜줌.
//                       이런식으로 함수 파라미터에 들어가는 객체 구조 분해 할당을 '함수 파라미터 객체 구조 분해 할당' 이라고 한다.

