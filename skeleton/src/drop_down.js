
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = (dogs) => {
  let dogArray = [];
  for(let dog in dogs){
    let atag = document.createElement("a");
    atag.textContent = dog;
    atag.href = dogs[dog];
    console.log(atag)

    let li = documet.createElement('li');
    li.class = 'dog-link';
    li.appendChild(atag);
    console.log(li)
    dogArray.push(li)
  }
  return dogArray
}

export function attachDogLinks() {
  console.log(dogs)
  const dogLinks = dogLinkCreator(dogs);
  let ul = document.querySelector(".drop-down-dog-list");
  for(let i = 0; i < dogLinks.length; i++){
    ul.appendChild(dogLinks[i]);
  }
}

attachDogLinks()

