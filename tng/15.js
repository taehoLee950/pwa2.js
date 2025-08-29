// p + buttons 불러오기
const p = document.querySelector('.curTime');
const stopBtn = document.querySelector('.stopBtn');
const startBtn = document.querySelector('.startBtn');

// 인터벌 스탑용 id 설정
// 인터벌 시작할 때 부여되는 숫자값으로 멈추기위해 사용.
let timerId;

// 오전, 오후 변수 지정
const am = 'AM';
const pm = 'PM';

// 인터벌 이내 재 갱신될 함수 작성
function refreshEverySec() {
  let now = new Date(); // 현재 시각 객체 인스턴스
  
  // now 에서 시간 빼오기
  const timeFormat = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  ];
  
  // pad start 주기
  // 문자열 선 변환 -> padStart 적용
  timeFormat[0] = timeFormat[0].toString().padStart(2, "0");
  timeFormat[1] = timeFormat[1].toString().padStart(2, "0");
  timeFormat[2] = timeFormat[2].toString().padStart(2, "0");

  // if 문 오전/오후 변수 저장
  let hour = now.getHours();
  let ampm;

  // if 문 오전 오후 출력
  if (hour >= 12){
    ampm = "PM";
    hour = hour - 12; //13시 -> 1시로 변환  
  }else {
    ampm = 'AM';
  }
  // 빼온 시간 출력
  const printTime = `${ampm} ${timeFormat.join(' : ')}`;
  
  // 시간 출력기 p 태그 content로 넣기
  p.textContent = printTime;
};

// 시작 버튼 클릭 시 인터벌 적용
startBtn.addEventListener('click', fnInterval);

// 스탑 버튼 클릭 시 인터벌 clear
stopBtn.addEventListener('click', stopClock);

// 인터벌 함수 선언
function fnInterval() {
  timerId = setInterval(refreshEverySec, 1000);
}

// 인터벌 함수 사용
fnInterval();

// 인터벌 스탑 함수 선언
function stopClock() {
  clearInterval(timerId);
  fnInterval = null;
}