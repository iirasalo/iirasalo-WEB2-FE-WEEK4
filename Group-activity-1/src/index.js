fetch('https://xkcd.now.sh/?comic=latst')
.then(response => response.json())
.then(data => {
 console.log('This is data: ', data);

  const image = document.createElement('img');
  image.setAttribute('src', data.img);
  image.alt = data.alt;
  const container = document.querySelector("#container");
  container.appendChild(image);
})
.catch(error => {
    if (error.status === 404) {
      console.log('ERROR!')
    }
  });


