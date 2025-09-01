// setTimeout(() => {
//   console.log('A');
// }, 3000);

// setTimeout(() => {
//   console.log('B');
// }, 2000);

// setTimeout(() => {
//   console.log('C');
// }, 1000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.


function pro1(str, ms) {
  return new Promise((resolve, reject) => { //two cb params
    setTimeout(() => {
      if (str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve(); //param #1 at line 19
      } else {
        reject();
      }
    }, ms);
  }) 
}

pro1('A', 3000) // promise 객체 반환 *line 19
// 3 methods
.then(() => {
  console.log('then')
}) // 작업이 성공했을 때, then() 실행
.catch(() => {
  console.log('catch');
})  // 작업이 실패했을 때, catch() 실행
.finally(() => {
  console.log('finally')
}); // 성공/실패 여부 상관 없이 무조건 실행


pro1('a', 3000)
then(() => {
  return pro1('b', 2000); // promise 반환 - resolve() 트리거 - 아래 then 실행
})
.then(() => {
  return pro1('c', 2000); // promise 
})
.catch();