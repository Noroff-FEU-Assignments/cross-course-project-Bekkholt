import { getFilmsIncluding } from "./films.js";

const products = document.querySelector(".items");

const detailUrl = "/product-specific.html" + films.title;

async function getFilmsIncluding(){
    try {
        detailContainer.innerHTML = `<div class="loader"></div>`
        const response = await fetch(detailUrl);
        const films = await response.json();
        
        document.title = films.title;

        createHtml(films);
        
    } catch (error) {
        detailContainer.innerHTML = message("error", error);
    }
}

getFilmsIncluding();

function getFilmsIncluding(films) {
    items.innerHTML = `<h1>${films.title}</h1>
    <div class="items">
    <img class="addams__specific" ${films.posterSrc} alt="The Addams Family - Halloween">
  <div class="checkout_buttons">
    <a href="checkout.html" class="cta cta_tall">Buy now $3.99</a>
  </div>
  </div>
  <div>
    <p>
      ${films.description}
    </p>
    <p class="product_text bold">
      Directed by:
    </p>
    <p class="product_text">
      ${films.directedBy}
    </p>
    <p class="product_text bold">
      Featuring:
    </p>
    <p class="product_text">
      ${films.featuring}
    </p>
  </div>;`
    }

//     const detailContainer = document.querySelector(".details");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);

// let id = params.get("id");

// const detailUrl = "https://wizard-world-api.herokuapp.com/Houses/" + id;

// async function fetchDetails(){
//     try {
//         detailContainer.innerHTML = `<div class="loader"></div>`
//         const response = await fetch(detailUrl);
//         const details = await response.json();
        
//         document.title = details.name;

//         createHtml(details);
        
//     } catch (error) {
//         detailContainer.innerHTML = message("error", error);
//     }
// }

// fetchDetails();

// function createHtml(details) {
//     detailContainer.innerHTML = `<h2>${details.name}</h2>
//     <h5>House founder:</h5><div class="properties founder">${details.founder}</div>
//     <h5>House ghost:</h5><div class="properties ghost">${details.ghost}</div>
//     <h5>House commonroom:</h5><div class="properties room">${details.commonRoom}</div>`;
//     }