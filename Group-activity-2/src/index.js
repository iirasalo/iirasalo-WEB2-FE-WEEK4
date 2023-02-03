/****************************** ADD DOG BUTTON ******************************/
// const add = document.getElementById('add');
const add = document.querySelector('#add');
add.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();
    console.log(data);
    const url = data.message; // URL of new dog image
    console.log(url);
    /*--------------- Get breed (Hint: Parse from URL using split) ---------------- */
    const splitURL = url.toString().split("/");
    const breed = splitURL[4];
    console.log(breed);

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // 
    const newListItem = document.createElement('li');
    const figure = document.createElement('figure');
    const image = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    
    image.setAttribute('src', `${url}`);
    figcaption.innerText = `${breed}`;
    newListItem.appendChild(figure);
    figure.appendChild(image);
    figure.appendChild(figcaption);

    /* Add the new dog card as a child to the ul in the .gallery element */
    const list = document.querySelector('ul');
    list.appendChild(newListItem);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
// const removeFirst = document.getElementById('remove-first');
const removeFirst = document.querySelector('#remove-first');
removeFirst.addEventListener('click', () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    // const firstDog = document.getElementsByTagName('li')[0];
    const firstDoggo = document.querySelector('li');
    if (!firstDoggo) {
      console.log('no dog in the list!');
      return;
    }
    firstDoggo.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
// const removeLast = document.getElementById('remove-last');
const removeLast = document.querySelector('#remove-last');
removeLast.addEventListener('click', () => {
  /*-------------------- Select the last dog card ----------------------- */
 
  const listOfDogs = document.querySelectorAll('li');
  console.log(listOfDogs);
  length = listOfDogs.length;
  if (length === 0) {
    console.log('no dog in the list!');
    return;
  }
  const lastDog = listOfDogs[length - 1];

  /*-------------------- Remove the last dog card ----------------------- */
  lastDog.remove();
});
