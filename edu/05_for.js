// For 문
// let i = 0 : 초기값
// i < 5; : 조건식
// i++ : 결과값이 조건식 범위내에 해당하는 동안 계속 진행

// for(let i = 1; i < 5; i++) {
//   console.log(i);
//   if(i >= 3){
//     break;
//   }
//   console.log(i);
// }

// for(let i = 1; i < 5; i++) {
//   console.log(i);
//   if(i === 3){
//     continue;
//   }
//   console.log(i);
// }

// 다중루프
for(let i = 0; i < 3; i++){
  console.log(`바깥쪽 루프: ${i}번째`);

  for(let z = 0; z < 3; z++) {
    console.log(`안쪽 루프: ${z}번째`);
  }
}

// 구구단 2단출력
// 예시)
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// 2 X 9 = 18

// let dan = 2;
// for (let i = 1; i <= 9; i++) {
//   console.log(`${dan} X ${i} = ${dan * 1}`);
// }

// 구구단 19단까지 출력
let maxDan = 19;
for(let dan = 2; dan <= maxDan; dan++) {
  console.log(`** ${dan}단 **`);

  for(let multiplier = 1; multiplier <= maxDan; multiplier++) {
    console.log(`${dan} X ${multiplier} = ${dan * multiplier}`);
  }
}