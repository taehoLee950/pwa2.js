// document.querySelector('.request-box > button').addEventListener('click', () => {
//   const url = document.querySelector('#apiUrl').value;
//   const cardBox = document.querySelector('.card-box');
//   cardBox.textContent = '';
//   axios.get(url)
//   .then(res => {
//     res.data.forEach(item => {
//       const newCard = document.createElement('div');
//       newCard.classList.add('card');
//       newCard.style.backgroundImage = `url(${item.download_url})`;

//       cardBox.appendChild(newCard);
//     })
//   })
//   .catch(err => {
//     console.error(err);
//   });
// });

// -------------async version
document.querySelector('.request-box > button').addEventListener('click', async () => {
  
  const loading = document.querySelector('.loading');
  try {
    loading.classList.add('loading-on');
    const url = document.querySelector('#apiUrl').value;
    const cardBox = document.querySelector('.card-box');
    cardBox.textContent = '';


    const res = await axios.get(url);
     res.data.forEach(item => {
      const newCard = document.createElement('div');
      newCard.classList.add('card');
      newCard.style.backgroundImage = `url(${item.download_url})`;

      cardBox.appendChild(newCard);
    });
    
  } catch (err) {
    console.error(err);
  } finally {
    loading.classList.remove('loading-on');
  }
});
  
