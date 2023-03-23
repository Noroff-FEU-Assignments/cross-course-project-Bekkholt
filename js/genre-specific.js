import { genre } from "./films.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const title = document.querySelector(".genreHeader");

for(let i = 0; i < genre.length; i++){
    const object = genre[i];
    const objectName = object.genreName;

    if (id == object.id) {
        title.innerHTML = `<h1>${objectName}<h1>`
    }
}

