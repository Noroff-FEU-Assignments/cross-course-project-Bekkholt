const apiBase = "https://noroffapi.bekkholt.no/";
const woocommerceBase = "/wp-json/wc/store/";
const productBase = "products/";

const filmsURL = apiBase + woocommerceBase + productBase;


// gets products
async function getFilms() {
    const response = await fetch(filmsURL);

    const films = await response.json();

    return films
}

// showing the data (this instead of the `div class= etc.` innerHTML)
function createFilmHTML(film) {
    const container = document.querySelector(".results");

    // create the div
    const productContainer = document.createElement("div");

    //add the class product to that div
    productContainer.classList.add("product");

    // add the id to that div
    productContainer.id = film.id;

    // for each of the images in this response
    for (let i = 0; i < film.images.length; i++) {
        const imgData = film.images[i];

        //create one image tag
        const img = document.createElement("img");

        //set the source
        img.src = imgData.src;

        //set the alt text
        img.alt = imgData.alt;

        // add that inside "create the div, add the class product to that div, add the id to that div"
        productContainer.append(img)
    }

    container.append(productContainer)
}

function createProductsHTML(films) {
    for (let i = 0; i < films.length; i++) {
        const product = films[i];
        createFilmHTML(product)
    }
}

// narrativ function
async function filmPage() {
    const films = await getFilms()
    createProductsHTML(films)
}

filmPage()



// const url = "https://noroffapi.bekkholt.no/wp-json/wp/v2/media";
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
//                 <a href="product-specific.html?id=0"><img class="addams" src="${films.source_url}" alt="${films.alt_text}"></a>
//                 <a href="checkout.html?id=0" class="cta price"></a>
//                 </div>
//                 </div>`;
//             });

//     } catch (error) {
//             console.error('failed');
//     }
// }

// callApi(url);