export default class Util{
 
dogLinkCreator = (dogs) => {
  let dogArray = [];
  for(let dog in dogs){
    let atag = document.createElement("a");
    atag.textContent = dog;
    atag.href = dogs[dog];

    let li = document.createElement('li');
    li.class = 'dog-link';
    li.appendChild(atag);

    dogArray.push(li)
  }
  return dogArray
}

attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  
  for(let i = 0; i < dogLinks.length; i++){
    ul.appendChild(dogLinks[i]);
  }
}

handleEnter() {
  nav.addEventListener("mouseenter", () =>{
    ul.style.display = ""
  })
}
}


const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
const ul = document.querySelector(".drop-down-dog-list");
const nav = document.querySelector(".drop-down-dog-nav")

attachDogLinks();


