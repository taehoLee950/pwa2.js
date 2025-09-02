// URL var
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

// search bar var
const searchInput = document.querySelector('#search');

// search btn var
const searchBtn = document.querySelector('#searchBtn');

// cardContainer var(parent for cards)
const cardContainer = document.querySelector('.cardContainer');

// loadingMsg
const loading = document.querySelector('.loading');

loading.classList.add('hidden');

// When btn is clicked
searchBtn.addEventListener('click', () => {
  const url = searchInput.value;

  cardContainer.innerHTML = '';
  
// loading msg present
loading.classList.remove('hidden');

// get url in promise obj, then execute
  axios.get(url)
  .then(res => {
    res.data.forEach(item => {
      const img = document.createElement('img');
      img.src = item.download_url;
      img.width = 380;
      cardContainer.appendChild(img);
    });
  })
  .catch(err => {
    console.error('요청 실패:', err);
    alert('이미지를 불러오지 못했습니다. URL을 확인해주세요.');
  })
  .finally(() => {
    loading.classList.add('hidden');
  })
});
