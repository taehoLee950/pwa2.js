// txtBox 불러오기 *id 선택자
const txtBox = document.querySelector('#txtBox');
console.log(txtBox);

// txtBox의 컨텐츠 빼오기
const txtBoxContent = txtBox.innerHTML;

// button 불러오기 *class 선택자
const btn = document.querySelector('.button');
console.log(btn)


// 텍스트 섹션 이벤트 함수 만들기
const produceBox = btn.addEventListener('click', ()=> {
  // 텍스트섹션 용 div 생성 및 스타일 추가
  const box = document.createElement('div');
  box.style.border = '1px solid black';
  
  // 텍스트 섹션 생성 위치 추가 (부모 가장 아래)
  box.appendChild('body');

  // 텍스트 섹션 content 내용 삽입 (txtbox의 컨텐츠가 담긴 변수)
  box.textContent(txtBoxContent);
  
})
