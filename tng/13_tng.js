// 요소 담기
const ul = document.querySelector('ul');

// li 요소 담기
const liList = ul.querySelectorAll('li');

// 어메이징브릭 배경색 추가
liList[8].style.backgroundColor = 'beige';

// '장기' 텍스트 요소 만들기
const jangGi = document.createElement('li');
jangGi.textContent = '장기';


// 사과 저장하기
const apple = document.querySelector('#apple');

// 장기넣기
ul.insertBefore(jangGi, apple);

// 색깔 바꾸기
liList.forEach((content, index) => {
  if (index % 2 === 0) {
    content.style.color = 'red';
  } else {
    content.style.color = 'blue';
  }
});

// 카드 구조만들기 *번외
  const result = {
    title: '타이틀',
    content: 'content',
    img: 'https://www.ttt.com/img/posts/~~~~'
 }

 addCard(result);
//  브라우저 dev comment에서 addCard(result) 로 확인해보면 뭔 말인지암.
function addCard(item) {
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const newCardImg = document.createElement('div');
  newCardImg.classList.add('card-img');

  const newCardTitle = document.createElement('p');
  newCardTitle.textContent = item.title;
  newCardTitle.classList.add('card-title');
  const newCardContent = document.createElement('p');
  newCardContent.textContent = item.content;
  newCardContent.classList.add('card-content');

  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardContent);

  document.body.appendChild(newCard);
}
