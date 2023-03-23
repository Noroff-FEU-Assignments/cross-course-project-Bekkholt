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

 // <div class="genre">
  //   <div class="products">
  //     <a href="product-specific.html?id=${film.id}"><img class="addams" src="images/Square_Eyes_Cover6.jpeg" alt="${film.alt}"></a>
  //     <a href="checkout.html?id=${film.id}" class="cta price">$3.99</a>
  //   </div>
  //   <div class="products">
  //     <a href="product-specific.html?id=${film.id}"><img class="batman" src="images/Square_Eyes_Cover7.jpeg" alt="${film.alt}"></a>
  //     <a href="checkout.html?id=${film.id}" class="cta price">$3.99</a>
  //   </div>
  //   <div class="products">
  //     <a href="product-specific.html?id=${film.id}"><img class="godzilla hide_mini" src="images/Square_Eyes_Cover2.jpeg" alt="${film.alt}"></a>
  //     <a href="checkout.html?id=${film.id}" class="cta hide_mini">$3.99</a>
  //   </div>
  //   <div class="products">
  //     <a href="product-specific.html?id=${film.id}"><img class="hobbs hide_small" src="images/Square_Eyes_Cover1.jpeg" alt="${film.alt}"></a>
  //     <a href="checkout.html?id=${film.id}" class="cta hide_price">$3.99</a>
  //   </div>
  // </div>