import { films, genre, getFilmByID } from "./films.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const title = document.querySelector(".genreHeader");
const content = document.querySelector(".content");

for(let i = 0; i < genre.length; i++){
    const object = genre[i];

    if (id == object.id) {
        const objectName = object.genreName;
        title.innerHTML = `<h1>${objectName}<h1>`; 

        const filmIDs = object.films;

        for (let ii = 0; ii < filmIDs.length; ii++) {
            const filmId = filmIDs[ii];
            const film = getFilmByID(filmId);
            content.innerHTML += `<div class="products">
            <a href="product-specific.html?id=${film.id}">
            <img class="hobbs" src="${film.posterSrc}" alt="${film.title}">
            </a>
            <a href="checkout.html" class="cta price">$3.99 +</a>
            </div>`
            }

        }

    }
