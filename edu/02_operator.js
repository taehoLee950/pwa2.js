// 산술연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 빼기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 % num2); // 나머지 구하기

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';
// 사용에 문제는 없지만 문자열을 합칠때 + 를 사용할 경우 숫자인지 데이터 값이 헷갈릴 수 있다.
console.log(lastName + firstName);
// 문자열 연결 함수를 쓰면 데이터값이 무엇인지 명확해짐.
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0; //num3 초기화
// num3 = num3 + num1
// 아래는 축약형
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위|후위) 증감연산자
let num4 = 0;
num4++;
console.log(num4);
num4--;
console.log(num4);

// 전위 증감연산자 예시
// 아래일 경우 값은 -1
console.log(--num4);

// 후위 증감연산자 예시
// 아래일 경우 값은 그대로 0
// 후위 증감연산자는 해당 코드라인이 끝난 이후 그 다음부터 변경값을 저장
console.log(num4--); // = 0

console.log(num4); // = -1

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);

// ==(데이터 타입 체크 X),
// ===(데이터 타입 체크 O),
console.log(1 == '1');
console.log(1 != '1');
console.log(1 === '1');
console.log(1 !== '1');

// 논리 연산자
console.log((1 === 1) && (1 === 0)); // and
console.log((1 === 1) || (1 === 0)); // or
console.log(!(1 === 1)); // not : convert result value to the other

// 삼항 연산자
// 조건식 ? 참일 경우 : 거짓일 경우 처리
let rank = 2;
let result = rank <= 2 ? '통과': '탈락'
console.log(result);