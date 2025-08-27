// 이벤트
function test() {
  alert('테스트');
}

// property listener 프로퍼티 리스너 ** 잘 안씀
// 동일한 이벤트 여러번 사용 불가 (마지막것만)
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => {
  alert('버튼222222222222222222222222222222222')
}
btn2.onclick = () => {
  alert('버튼버튼버튼버튼버튼버튼버튼버튼')
}

// addEventListener
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', btn3Alert);

function btn3Alert (event) {
  console.log(event);
  alert('버튼333');
  alert('버튼버튼버튼버튼');
}

// removeEventListener() ; : 이벤트 제거
// btn3.removeEventListener('click', btn3Alert);

// ---------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup',(e) => {
  console.log(e.target.value); 
})
