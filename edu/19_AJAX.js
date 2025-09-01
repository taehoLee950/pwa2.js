
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

axios.get(url)
.then(response => {
  response.data.forEach((item, idx) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});



