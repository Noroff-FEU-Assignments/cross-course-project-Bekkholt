const api = "https://noroffapi.bekkholt.no/";
const woocommerce = "/wp-json/wc/store/";
const product = "products/";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id = params.get("id");

const filmsURL = api + woocommerce + product;

async function fetchSingleProduct(id){
      const response = await fetch(filmsURL + `${id}`);
      const result = await response.json();

      return result;
}
 const singleProduct = await fetchSingleProduct(id);


 function createProductHTML(film) {
  const itemContainer = document.querySelector(".items");

  const title = document.createElement("h1");
  title.innerText = singleProduct.name;

  itemContainer.append(title);

  for (let i = 0; i < singleProduct.images.length; i++) {
    const imgData = singleProduct.images[i];
    const imageURL = "product-specific.html?id=";

    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.classList.add("poster");

    itemContainer.append(img);
  }
  const a = document.createElement(`a`);
  const buttonURL = "checkout.html?id=";
  a.href = buttonURL + `${singleProduct.id}`;

  a.classList.add("centered");

  const price = a.appendChild(document.createElement("p"));
  const basePrice = singleProduct.prices.price;
  const prefix = singleProduct.prices.currency_prefix;
  
  const newPrice = prefix + basePrice;
  const start = newPrice.slice(0,3);
  const stop = newPrice.slice(3);

  const resultPrice = start + "." + stop;
  
  price.innerText = "Buy Now\n" + resultPrice;
  itemContainer.append(a);

  price.classList.add("cta");

  const description = document.createElement("p");
  description.innerHTML = `<div>
     <p>
       ${singleProduct.description}
     </p>
     </div>`;

  itemContainer.append(description);
}

  createProductHTML(singleProduct);