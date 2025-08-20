
// let cnt = 0;

// while (cnt < 3) {
//   console.log(cnt);
//   cnt++;
  // console.log('while문 시작');

  // if(cnt >=3) {
  //   break;
  // }
  // console.log('while문 끝');
// }

// 구구단 2단만
let baseNum = 2;
let multiplier = 1;
let limit = 10;

while (multiplier < limit) {
  console.log(`${baseNum} X ${multiplier} = ${baseNum * multiplier}`)
  multiplier++;
}

// // do-while문
// do {
//   // 여기 있는 코드는 무조건 1번은 실행함
// } while(multiplier < 1); //그 이후 조건문을 실행