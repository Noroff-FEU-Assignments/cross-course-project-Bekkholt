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

            console.log(filmId);

            content.innerHTML = `<div class="products">
            <a href="product-specific.html?id=${films.id}">
            <img class="hobbs" src="${films.posterSrc}" alt="${films.title}">
            </a>
            <a href="checkout.html" class="cta price">$3.99 +</a>
            </div>`
            }

        }

    }


// for(let i = 0; i < results.length; i++) {
//     const content = results[i];




//     const resultHtml = `
//     <div class="products">
//     <a href="product-specific.html">
//     <img class="hobbs" src="${result.posterSrc}" alt="${result.title}">
//     </a>
//     <a href="checkout.html" class="cta price">$3.99 +</a>
//     </div>`
//     searchResult.innerHTML += resultHtml;
// }


// `<div class="genre">
// <div class="products">
//   <a href="product-specific.html?id=0"><img class="addams" src="images/Square_Eyes_Cover6.jpeg" alt="The Addams Family - Halloween"></a>
//   <a href="checkout.html?id=0" class="cta price">$3.99</a>
// </div>
// <div class="products">
//   <a href="product-specific.html?id=1"><img class="batman" src="images/Square_Eyes_Cover7.jpeg" alt="The Batman - Unmask the truth"></a>
//   <a href="checkout.html?id=1" class="cta price">$3.99</a>
// </div>
// <div class="products">
//   <a href="product-specific.html?id=2"><img class="godzilla hide_mini" src="images/Square_Eyes_Cover2.jpeg" alt="Godzilla - King of the monsters"></a>
//   <a href="checkout.html?id=2" class="cta hide_mini">$3.99</a>
// </div>
// <div class="products">
//   <a href="product-specific.html?id=3"><img class="hobbs hide_small" src="images/Square_Eyes_Cover1.jpeg" alt="Fast & Furious Presents: Hobbs & Shaw"></a>
//   <a href="checkout.html?id=3" class="cta hide_price">$3.99</a>
// </div>`