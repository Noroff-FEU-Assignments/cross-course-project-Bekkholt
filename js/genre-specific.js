const api = "https://noroffapi.bekkholt.no/";
const woocommerce = "/wp-json/wc/store/";
const product = "products/";

const categoriesURL = api + woocommerce + product;

async function getCategories() {
    const response = await fetch(categoriesURL);

    const categories = await response.json();

    return categories
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const title = document.querySelector(".genreHeader");
const content = document.querySelector(".content");

