// 아래처럼 별을 찍어주세요.
// 예시)
// *****
// *****
// *****
// *****
// *****
// *****

// 실습 1 시작
// 내가 한 것
// let star = '*';
// let sky = '';
// let i = 0;
// let print = 0;
// for (print; print < 5; print++) {
//   sky;

//   for(i; i < 5; i++) {
//     sky += star;
//   }
//   console.log(sky);
// }


// 같이 한 것
// let star = '*';

// for(let i = 0; i < 5; i++) {
//   let sky = '';
//   for(let z = 0; z < 5; z++) {
//     sky += star;
//   }
//   console.log(sky);
// }
// 실습 1 끝

// 실습 2 시작
// 아래처럼 별을 찍어주세요.
// 예시)
// *
// **
// ***
// ****
// *****
// 내가 한 것
// let star = '*';
// let starAdded = '';
// for (i = 0; i < 5; i++) {
//   starAdded += star;
//   console.log(starAdded);
// }

// 아래처럼 별을 찍어주세요.
// 예시)
//         *
//        **
//       ***
//      ****
//     *****
// let emptySpace = ' ';
// let star = '*'; 
// for(x = 0; x < 5; x++) {
//   emptySpace + emptySpace + emptySpace + emptySpace + emptySpace;
//   star += star;
//   console.log(emptySpace + star);
//   emptySpace - emptySpace;
// }

// 아래는 같이한거 (위에 내가한건데 포기, 문자열을 어떻게 빼야할지 모르겠음)
let makedStar = '';

for (let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace = '';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}

