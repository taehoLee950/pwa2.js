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

for(let i = 1; i < 5; i++) {
  console.log(i);
  if(i === 3){
    continue;
  }
  console.log(i);
}