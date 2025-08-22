// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작

// Date 인스턴스 (객체만드는걸 인스턴스라고함, 보통 const 변수에 저장)
// 새로운 객체를 만들때 'new'를 넣고 대문자로 객체명을 짓고 '()' 를 넣어줌.
const now = new Date();

//새로운 Date 객체 선언 3가지
const date1 = new Date('1990-02-23 14:30:30');
const date2 = new Date(1980, 10, 10, 23, 0, 1); //10월인데 November로 뜨는데 그건 프로그램이 0~11로 months를 인식하기 때문.
const date3 = new Date(1);

console.log(date1);
console.log(date2);
console.log(date3);

// getFullYear() : 연도 불러오기
const nowYear = now.getFullYear();
console.log(nowYear);

// getMonth() : 월 불러오기, **0~11로 월 단위 반환
const nowMonth = now.getMonth();
console.log(nowMonth);

// getDate() : 일 불러오기
const nowDate = now.getDate();
console.log(nowDate);

// getHours() : 시를 반환
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 분을 반환
const nowMinutes = now.getMinutes();


// getSeconds() : 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);


// getMilliseconds () : 밀리단위 초를 반환
const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

//  getDay() : 요일 반환 (***주의: 0~6반환, 0 = 일요일)
const nowDay = now.getDay();
console.log(nowDay)

//요일 한글로 변환
let koreanDay = '';
switch(nowDay) {
  case 0:
    koreanDay = '월요일';
    break;
  case 1:
    koreanDay = '화요일';
    break;
  case 2:
    koreanDay = '수요일';
    break;
  case 3:
    koreanDay = '목요일';
    break;
  case 4:
    koreanDay = '금요일';
    break;
  case 5:
    koreanDay = '토요일';
    break;
  case 6:
    koreanDay = '일요일';
    break;

}

// xxxx년 xx월 xx일 xx:xx:xx 금요일
const nowFormat = `${nowYear}년${lpad(nowMonth, 2, '0')}월${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);

// number -> string으로 변환 하는 두가지 방법
console.log(typeof(nowYear)), typeof(nowYear.toString()), typeof(String(nowYear));

//string 타입으로 변환한 변수 왼쪽에 글자 추가(최대 2글자, 1자리면 '0'추가, 2자리면 '0' 추가 안함)
console.log(nowMonth.toString().padStart(2, '0'));

function lpad(origin, length, fillStr){
    // origin 의 타입 체크. string이어야 쓸 수 있음
    if(typeof(origin) === 'number') {
      origin = origin.toString();
    }
  return  origin.padStart(length, fillStr)
}

// 두 날짜의 차를 구하는 방법
const targetDate = new Date('2025-03-13 18:10:00')
const diff = Math.abs(targetDate - now) /(1000 * 60 * 60 * 24);
//  일단위 1000 (밀리세컨) * 60 * 60 * 24
console.log(Math.ceil(diff));