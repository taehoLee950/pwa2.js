// + 버튼을 누를때마다 증감시키기

// 버튼 저장
const incrementBtn = document.querySelector('.incrementBtn');
console.log(incrementBtn);

// span 저장
const output = document.querySelector('.output');
// 버튼 증감 함수 선언
i = 0;
const increase = incrementBtn.addEventListener('click', (e) => {
    output.textContent = i;
    i++;
});