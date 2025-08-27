// 요소 선택 방법 
// HTML 요소의 'id'로 선택 *잘 사용안함
const title = document.getElementById('title');
console.log(title);
title.style.color = 'blue';

// HTML 요소의 태그명으로 선택 
// 태그명이니 모든 태그를 선택 및 변경함.
const tagH1 = document.getElementsByTagName('h1'); //배열 비스무리한 htmlcollection으로 가져옴
console.log(tagH1);
tagH1[1].style.fontSize = '50px';

// js for문 응용버전
// 모든 h1태그의 사이즈를 50px로 변경
for (let i = 0; i < tagH1.ltngth; i++) {
  tagH1[i].style.fontSize = '50px';
}

// HTML 요소의 클래스명으로 선택 방법
const classH1 = document.getElementsByClassName('test');
console.log(classH1);

// *** 중요 *** 얘를 현업에서 젤 많이씀. 위에거 이걸로 다 할 수 있음.
// CSS 선택자로 요소를 선택하는 방법
// 선택하는게 복수일경우 가장 첫번째 요소만 선택.
// '.' , '#', 같은걸로 클래스, ID등을 구분해서 사용
const selectorTitle = document.querySelector('#title'); 
selectorTitle.style.color = 'red';

// *** 중요 ***
// CSS 선택자로 요소를 선택하는 방법
// 복수일 경우 모두 선택, NodeList 객체
// 이걸 사용하면 line 13에 있는 for문을 안 사용해도 걍 된다이거야!
const selectorAllH1 = document.querySelectorAll('h1');
selectorAllH1.forEach(node => node.style.color = 'aquamarine');

// --------------------------------------
// 요소 조작
// --------------------------------------
// textContent : 컨텐츠를 획득 및 변경, 순수한 텍스트 데이터를 전달
selectorTitle.textContent = '<span>alert("하하")</span>';
// innerHTML : 컨텐츠를 획득 및 변경, 태그는 태그로 인식해서 전달
// html 태그는 문자로 안 들어가고 태그로 인식해서 태그 효과를 내고 출력값은 '이너로 넣었다' 만 뜸.
// innerHTML은 태그로 인식해서 그 태그에 해킹 공격을 할 수도있다.
selectorTitle.innerHTML = '<span>이너로 넣었다.</span>';

// setAttribute(속성명, 값) : 요소에 속성을 추가
const inputEmail = document.querySelector('input'); 
// <input type = 'text' placeholder = '이메일을 적어주세요'; 와 동일함. 
const inputEmail = document.querySelector('input'); 
inputEmail.setAttribute('placeholder', '이메일을 적어주세요');
inputEmail.setAttribute('required', '');

// removeAttribute(속성명) : 요소의 속성을 제거
selectorAllH1[1].removeAttribute('style'); // 두번째 h1 지정
// 두번째 h1 지정 * querySelector는 html요소를 nodelist (이터러블) 로 반환한다
// 그래서 인덱스 번호로 지정이 가능한거임. ^^

// ----------------------
// 요소 스타일링
// ----------------------
// style : HTML 요소에 인라인 스타일 추가
title.style.color = 'red';

// claseList : HTML 요소에 클래스 추가
const p = document.querySelector('p');
p.setAttribute('class', 'test2'); // 첫번째 p 태그에 class 추가, class=test 에서 test2로 덮어써짐.
                                // 이렇듯 js는 동적으로 작동을 전제로 함. 정적이면 html에 해버리지
console.log(p.classList); //classList는 property이다. *method 아님
p.classList.add('test2'); // test2 라는 클래스를 추가.
p.classList.remove('test'); // test 라는 클래스를 제거, 남는건 위의 test2 클래스.
p.classList.toggle('test3'); // 클래스 넣었다 뺐다 하기 (있으면 삭제, 없으면 만듬) *night-vision같네?

// -------------
// 새로운 요소 생성
// -------------
const newH1 = document.createElement('h1');
newH1.textContent = '새로운 요소다';

// 요소 삽입 : 부모 노드의 가장 마지막 자식 노드로 추가
document.body.appendChild(newH1);

// 요소 삽입: 부모 노드 자식 노드 중 특정 타겟 앞에 노드를 추가
document.body.insertBefore('p');
document.body.insertBefore(newH1, childP);

// 요소 제거
const form = document.querySelector('form');
document.body.removeChild(form);