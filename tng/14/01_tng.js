// 검색 입력란 불러오기 *id 선택자
const txtBox = document.querySelector('#txtBox');
console.log(txtBox);

// 검색 입력란의 컨텐츠 빼오기
const txtBoxContent = txtBox.value;

// button 불러오기 *class 선택자
const btn = document.querySelector('.button');
console.log(btn)

// 부모 컨테이너 appendChild용 빼오기
const parent = document.querySelector('.container');

// (입력란 값 목록 저장)
// 텍스트 섹션 이벤트 함수 버튼에 적용
btn.addEventListener('click', fnEventSection)

// 텍스트 섹션 엔터키로도 사용가능하게 하기
txtBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    fnEventSection();
  }
})

// 텍스트 섹션 생성 이벤트 함수 ---- 시작
function fnEventSection() {
  
  if (txtBox.value !== ''){
    // 텍스트섹션 용 div 생성 및 스타일 추가
    const box = document.createElement('div');
    box.style.border = '1px solid black';
    box.style.borderRadius = '5px';
    box.style.marginBottom = '10px';

    // 텍스트 섹션 생성 위치 추가 (부모 가장 아래)
    parent.appendChild(box);

    // 검색 입력란의 텍스트를 저장 목록에 넣어주기
    box.textContent = txtBox.value;
    txtBox.value = '';
  }
}
console.dir(box);
// 텍스트 섹션 생성 이벤트 함수 ---- 끝

