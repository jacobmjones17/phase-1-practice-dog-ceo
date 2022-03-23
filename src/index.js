console.log('%c HI', 'color: firebrick');

let breeds;

const dogImage = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const imageObj = {
    method: "GET",
    headers: {
        "Content-Type" : "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(),
};


function fetchImage() {
    return fetch(dogImage)
    .then(function (response) {
        return response.json();
    })
    .then(function(response) {
        response.message.forEach(dog => showDog(dog))
        // document.querySelector("body").textContent = object.id
    })
};

function showDog(dog) {
    const img = document.createElement("img")
    img.src = dog
    const dogImageContainer = document.getElementById("dog-image-container")
    dogImageContainer.append(img)
};


function fetchBreeds() {
    fetch(breedUrl)
    .then(response => response.json()
    .then(data => {
        breeds = Object.keys(data.message);
        breeds.forEach(breed => showBreeds(breed));
        return breeds
    }))

    // debugger;
};

function showBreeds(breed) {
    const li = document.createElement("li")
    li.textContent = "breed"
    li.addEventListener("click", (event) => {
        event.target.style.color = "red"
    });

    const ul = document.getElementById("dog-breeds")
    ul.append(li)
};





fetchImage();
fetchBreeds()