// 시계 만들기
// 현재 시각 출력
// stop 버튼: 현재 시간 멈춤
// start : 멈춘 시간 다시 조작
// 기록 : 버튼 누른 기점의 현재 시간을 기록 -> 시계 아래에 출력

// 현재시각 p 태그 불러오기
const clock = document.querySelector('.clock');

// 버튼 스탑 불러오기
const stopBtn = document.querySelector('.stopBtn');

// 버튼 스타트 불러오기
const startBtn = document.querySelector('.startBtn');

// 기록 요소용 박스 컨테이너 불러오기
const storeTimeContainer = document.querySelector('.storeTimeContainer');

// Date 객체 인스턴스 및 함수 작성
function fnCurTime () {
  let date = new Date();

  // 연도 - 월 - 일 - 시간 - 분 - 초 작성.
  let arrCalendar = [
    date.getFullYear(),
    date.getMonth() +1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]

  // 현재 시각 변수 저장 *.clock 컨텐츠로 들어갈 예정
  let printTime = `${arrCalendar[0]}년 ${arrCalendar[1].toString().padStart(2, 0)}월 ${arrCalendar[2].toString().padStart(2, 0)}일 ${arrCalendar[3].toString().padStart(2, 0)}시 ${arrCalendar[4].toString().padStart(2, 0)}분 ${arrCalendar[5].toString().padStart(2, 0)}초`
  console.log(printTime); //작동 확인 완료*

  // 현재 시각이 저장된 변수를 p태그 클래스로 넣어주기.
  clock.textContent = printTime;
}

// 인터벌 반환값 저장용 변수 선언
let timerIntervalId = null;

// startBtn 인터벌 시작 만들기
startBtn.addEventListener('click', () => {
  if (timerIntervalId !== null) return;
  fnCurTime();
  timerIntervalId = setInterval(fnCurTime, 1000);
})

// stopBtn 인터벌 중지 만들기
stopBtn.addEventListener('click', () => {
  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  // 기록 만들기
  // 기록용 p 태그 만들기
  const p = document.createElement('p');

  // 만든 p 태그 안에 현재 시각 담기
  p.textContent = clock.textContent;

  // 현재시각이 담긴 p태그를 container 의 자식 노드로 추가해주기
  storeTimeContainer.appendChild(p);
  
})



