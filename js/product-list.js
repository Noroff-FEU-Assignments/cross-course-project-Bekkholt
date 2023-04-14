const apiBase = "https://noroffapi.bekkholt.no/";
const woocommerceBase = "/wp-json/wc/store/";
const productBase = "products/";

const filmsURL = apiBase + woocommerceBase + productBase;

async function getFilms() {
    const response = await fetch(filmsURL);

    const films = await response.json();

    return films
}

function createFilmHTML(film) {
    const container = document.querySelector(".results");
    const productContainer = document.createElement("div");

    
    productContainer.classList.add("products");
    productContainer.id = film.id;

    for (let i = 0; i < film.images.length; i++) {
        const imgData = film.images[i];
        const img = document.createElement("img");

        img.src = imgData.src;
        img.alt = imgData.alt;

        img.classList.add("addams");
        
        productContainer.append(img)
    }

    const price = document.createElement("p");
    price.innerText = film.prices.price;
    productContainer.append(price);

    price.classList.add("cta");

    container.append(productContainer)
}

function createProductsHTML(films) {
    for (let i = 0; i < films.length; i++) {
        const product = films[i];
        createFilmHTML(product)
    }
}

async function filmPage() {
    const films = await getFilms()
    createProductsHTML(films)
}

filmPage()

// const url = "https://noroffapi.bekkholt.no//wp-json/wc/store/products/";
// const resultsContainer = document.querySelector(".results");


// async function callApi(){
//     try {
//             const response = await fetch(url);
//             const json = await response.json();

//             const films = json;

//             resultsContainer.innterHTML="";

//             films.forEach(function(films) {
//                 resultsContainer.innerHTML += `<div class="genre">
//                 <div class="products">
//                 <a href="product-specific.html?id=0"><img class="addams" src="${films.images.src}" alt="${films.images.alt}"></a>
//                 <a href="checkout.html?id=0" class="${films.prices.regular_price}"></a>
//                 </div>
//                 </div>`;
//             });

//     } catch (error) {
//             console.error('failed');
//     }
// }

// callApi(url);