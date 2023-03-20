import { getFilmsIncluding } from "./films.js";

const searchbar = document.getElementById("searchbar");
const searchResult = document.getElementById("searchResult");

searchbar.addEventListener("keydown", handleKeyDown);

function handleKeyDown(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        const results = getFilmsIncluding(searchbar.value);
        showResults(results);
    }
}

function showResults(results){
    searchResult.innerHTML ="";
    const noResult = results.length === 0;
    
    if (noResult) {
        searchResult.innerHTML = `<p>No results found<p>`;
    } else {
        for(const result of results) {
            const resultHtml = `
            <div class="products">
            <a href="product-specific.html">
            <img class="hobbs" src="${result.posterSrc}" alt="${result.title}">
            </a>
            <a href="checkout.html" class="cta price">$3.99 +</a>
            </div>`
            searchResult.innerHTML += resultHtml;
        }
    }
}