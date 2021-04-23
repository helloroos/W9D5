
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = () => {
  let lis = [];
  Object.keys(dogs).forEach(function(dog) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = dog;
    a.href = dogs[dog];
    li.classList.add("dog-link")
    li.appendChild(a);
    lis.push(li);
  });
  return lis;
}

let createDogs = dogLinkCreator();

const attachDogLinks = () => {
  let dogDropDownEle = document.getElementsByClassName("drop-down-dog-list")[0];
  const dogLinks = dogLinkCreator();
  dogLinks.forEach(function(dogLink) {
    dogDropDownEle.appendChild(dogLink)
  });
}

attachDogLinks();

const handleEnter = () => {
  let dogLis = document.getElementsByClassName("dog-link");
  dogLis.forEach(function(dogLi) {
    dogLi.classList.add("show")
  });
};

const handleLeave = () => {
  let dogLis = document.getElementsByClassName("dog-link");
  dogLis.forEach(function (dogLi) {
    dogLi.classList.remove("show")
  });
}

let dogDropDownEle = document.getElementsByClassName("drop-down-dog-list")[0];

dogDropDownEle.addEventListener("mouseenter", handleEnter);
dogDropDownEle.addEventListener("mouseleave", handleLeave);
