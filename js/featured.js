import { createFilmHTML } from "./index.js";

const api = "https://noroffapi.bekkholt.no/";
const woocommerce = "/wp-json/wc/store/";
const products = "products/";
const featured = "?featured=true";

const filmsURL = api + woocommerce + products + featured;

async function getFilms() {
    const response = await fetch(filmsURL);

    const films = await response.json();

    films.sort((a, b) => a.name.localeCompare(b.name));

    return films
}
const featuredFilms = await getFilms()

const featuredContainer = document.querySelector(".featuredContainer");
for (let i = 0; i < featuredFilms.length; i++) {
    const featuredFilm = featuredFilms[i];
    createFilmHTML(featuredFilm, featuredContainer);
}