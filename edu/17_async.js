function pro1(str, ms) {
  return new Promise((resolve, reject) => { //two cb params
    setTimeout(() => {
      if (str === 'a' || str === 'b' || str === 'c') {
        console.log(str);
        resolve(); 
      } else {
        reject();
      }
    }, ms);
  }) 
}


// async/await 문법
// async : 함수 선언 앞에 적기
// await: 비동기 처리 앞에 적기
// 프로미스 지옥을 개선하기 위해 나온 문법
// 내부적으로 promise 객체를 사용하여 비동기 처리를 실행
async function test() {
  await pro1('a', 1500);
  await pro1('b', 1000);
  await pro1('c', 500);
}

test();