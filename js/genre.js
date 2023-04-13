import { genre } from "./films.js";

const indexes = document.querySelectorAll(".index");

for(let i = 0; i < indexes.length; i++){
    const index = indexes[i];
    const indexName = index.textContent;

    for(let ii = 0; ii < genre.length; ii++) {
        const genreElement = genre[ii];
        if(indexName == genreElement.genreName){
            index.innerHTML = `${genreElement.genreName}`
        }
    }
}



const url = "https://noroffapi.bekkholt.no/wp-json/wp/v2/product";


async function callApi(){
    try {
            const response = await fetch(url);
            const json = await response.json();

            console.log(json)

    } catch (error) {
            console.error('failed');
    }
}

callApi(url);