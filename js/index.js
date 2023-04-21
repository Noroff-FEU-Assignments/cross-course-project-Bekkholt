const api = "https://noroffapi.bekkholt.no/";
const woocommerce = "/wp-json/wc/store/";
const products = "products/";

const filmsURL = api + woocommerce + products;

const categoryList = [];

async function getFilms() {
    const response = await fetch(filmsURL);

    const films = await response.json();

    films.sort((a, b) => a.name.localeCompare(b.name));

    return films
}

export function createFilmHTML(film, productContainer) {
    const filmCard = document.createElement("div");
    filmCard.classList.add("items");

    productContainer.classList.add("genre");

    for (let i = 0; i < film.images.length; i++) {
        const imgData = film.images[i];

        const a = document.createElement('a');
        const imageURL = "product-specific.html?id=";
        a.href = imageURL + `${film.id}`;
        
        const img = a.appendChild(document.createElement('img'));
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.classList.add("addams");

        filmCard.append(a);
    }

    const a = document.createElement(`a`);
    const buttonURL = "checkout.html?id=";
    a.href = buttonURL + `${film.id}`;
    const price = a.appendChild(document.createElement("p"));
    const basePrice = film.prices.price;
    const prefix = film.prices.currency_prefix;
    const newPrice = prefix + basePrice;
    const start = newPrice.slice(0,3);
    const stop = newPrice.slice(3);
    const resultPrice = start + "." + stop;
    price.innerText = resultPrice;
    price.classList.add("cta");
    filmCard.append(a);

    productContainer.append(filmCard);
}

function createProductsHTML(films) {


    const container = document.querySelector(".items");

    for (let i = 0; i < categoryList.length; i++) {
        const category = categoryList[i];
        const productContainer = document.createElement("div");
        container.append(productContainer);

        const a = document.createElement("a");
        const genre = document.createElement("h2");
        genre.classList.add("index");
        genre.innerText = category.name;
        a.append(genre);
        productContainer.append(a);
        a.href = "genre.html?id=" + category.id;
        
        const filmContainer = document.createElement("div");
        productContainer.append(filmContainer);
        
        const filmsInCategory = getFilmsInCategory(films, category);
        for (let i = 0; i < filmsInCategory.length; i++) {
            createFilmHTML(filmsInCategory[i], filmContainer);
        }
    }
}

function getFilmsInCategory(films, category) {
    return films.filter(film => 
        film.categories.find(filmCategory => 
            filmCategory.name === category.name));
}

function populateCategoryList(films) {

    for (let i = 0; i < films.length; i++) {
        const film = films[i];
        const filmCategories = film.categories;
        
        for (let ii = 0; ii < filmCategories.length; ii++) {
            const category = filmCategories[ii];
            if (!categoryList.find(c => c.name === category.name)) {
                categoryList.push(category);
            }
        }
    }
}

async function filmPage() {
    const films = await getFilms()
    
    populateCategoryList(films);

    createProductsHTML(films)
}

filmPage()