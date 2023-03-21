import { getFilmByID } from "./films.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const film = getFilmByID(id);

const poster = document.querySelector(".addams__specific");

posterSpecific(poster, film);

function posterSpecific(poster, film) { 
    poster.innerHTML = `<img class="addams__specific" src="${film.posterSrc}" alt="${film.alt}">`
}