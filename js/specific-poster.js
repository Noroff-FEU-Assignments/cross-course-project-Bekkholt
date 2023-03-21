import { getFilmByID } from "./films.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const film = getFilmByID(id);

const poster = document.querySelector(".items");

posterSpecific(poster, film);

function posterSpecific(poster, film) { 
    const currentInnerHtml = poster.innerHTML;
    const image = `<img class="poster" src="${film.posterSrc}" alt="${film.alt}">`;
    poster.innerHTML = image + currentInnerHtml;
}