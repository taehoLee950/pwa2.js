// math 객체

// ceil(arg) 올림
// round(arg) 반올림
// floor(arg) 버림
let double = 0.9;
Math.ceil(double); // 1;
Math.round(double); // 1;
Math.floor(double); // 0;

// random() : 0 ~ 1미만의 랜덤한 수를 반환
let randomDouble = Math.random();

// abs(arg) : 절대값을 반환
// 예시) 돈 계산같은거 할때 변수에 어떤 수가 담겨있는지 모를때 음수값 방지
Math.abs(1);
Math.abs(-1); //출력값 1
















// // random() : 0초과 1미만의 랜덤한 수를 반환
// let randomDouble = Math.random();

// // 1~10 난수
// console.log(Math.ceil(randomDouble * 10));

// // 0. 저장용 배열 만들기 (length: 11, 각 요소의 값은 0)
// const arrSaveCnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// // 1. 루프 100만번 돌려
// for(let i = 0; i < 1_000_000;) {
//    // 1-1 랜덤수 획득
//   const randomNum = (Math.ceil(Math.random() * 10));
//    // 1-2. 저장용 ㅂ열에 나온숫자를 카운트해서 저장
//   arrSaveCnt[randomNum]++;
// }

// // 2. 저장용 배열 확인
// console.log(arrSaveCnt);