nowTimeIntoElement('#nowTime');

/**
 * replace the content of a chosen HTML selector with current time.
 * @param {String} selector 
*/
function nowTimeIntoElement(selector){
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * returns current time in such format 'am|pm hh : mm : SS'
 * @returns {String}
 */
function generateNowTimeFormat() {
  const now = new Date();
  let hrs = now.getHours(); // let으로 해야 값 재할당 가능
  let mins = now.getMinutes();
  let secs = now.getSeconds();
  let ampm;

  if(hrs < 12){
    ampm = '오전';
  } else {
    ampm = '오후';
    hrs -= 12;
  }

  return `${ampm}  ${hrs.toString().padStart(2, 0)} : ${mins.toString().padStart(2, 0)} : ${secs.toString().padStart(2, 0)}`;
}

let intervalNowTime = setInterval(() => {
  const nowTime = document.querySelector('#nowTime');
  nowTime.textContent = generateNowTimeFormat();
}, 1000);

// stop-btn 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

// restart-btn 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');

  if(intervalNowTime === null) {
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#nowTime');
    }, 1000)
  }
});

// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportContainer');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormat();
  container.appendChild(newP);
});