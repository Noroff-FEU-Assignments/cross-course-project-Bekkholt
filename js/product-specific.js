import { getFilmByID } from "./films.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const film = getFilmByID(id);

// -------------

const items = document.querySelector(".items");

productSpecific(items, film);

function productSpecific(items, film) { 
  items.innerHTML = `<h1>${film.title}</h1>
  <div class="items">
  <img class="addams__specific" src="${film.posterSrc}" alt="The Addams Family - Halloween">
  <div class="checkout_buttons">
  <a href="checkout.html" class="cta cta_tall">Buy now $3.99</a>
  </div>
  </div>
  <div>
  <p>
    ${film.description}
  </p>
  <p class="product_text bold">
    Directed by:
  </p>
  <p class="product_text">
    ${film.directedBy}
  </p>
  <p class="product_text bold">
    Featuring:
  </p>
  <p class="product_text">
    ${film.featuring}
  </p>
  </div>`
}