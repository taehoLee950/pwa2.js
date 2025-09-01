let user_input = 10;

try {
  // 처리하고 싶은 로직 작성하는 영역
  console.log('try 시작');

  // user 입력값에 의한 에러일 때 강제 예외 발생시키는 예시
  if (user_input > 1) {
    // 강제 예외 발생
    throw new Error('유저 입력값이 0임'); // 가장 처음 만나는 catch문에 들어감
  }
  console.log('try 끝');

} catch (err) {
  // try문에서 에러가 발생했을 때, 처리할 로직을 작성하는 영역
  console.log('예외 발생', err.message)

  // if 문 에러 로직 예시 : error type이 'true' 일 시 console 출력
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if (err instanceof ReferenceError) {
    console.log('참조에러 발생')
  }

} finally {
  // 정상 or 에러 여부 상관없이 무조건 실행되는 로직을 작성하는 영역
  console.log('finally 실행')
}

try {
  // 실행할 코드
} catch (err) {
  // 에러 발생 시 실행
} finally {
  // (선택) 성공/실패와 상관없이 항상 실행
}
