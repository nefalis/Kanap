// recupere l'id
// recupere produit avec id
// injecte dans le DOM


// on récupre l'url
const url = new URL(window.location.href);

// récuperer l'id
const idProduct = url.searchParams.get("id");
//URLSearchParams(document.location.search).get("id"); ?
//const idProduct = new URL(window.location.href).searchParams.get("id");

// elements produits

/*const titleProduct = document.getElementById("title");
const priceProduct = document.getElementById("price");
const descriptionProduct = document.getElementById("description");
const imgProduct = document.querySelector("item__img");
const colorProduct = document.getElementById("colors")*/

fetch('http://localhost:3000/api/products' + idProduct)

  .then(res => res.json()) //récuper resultat au format json
  .then(data => { // quand se passe bien
let display  = (
   
`
      <img src="${article.imageUrl}" alt="${article.altTxt}">
      <h1 id="title">${article.name}</h1>
      <p>Prix : <span id="price">${article.price}</span>€</p>
      <p id="description">${article.decription}</p>`
)
      
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }


    document.querySelector('#items').insertAdjacentHTML('beforeend', display)

  })

   
  console.log(article)

  .catch(err => console.log(err)) //quand se passe mal



/*function getArticle() {
    fetch('http://localhost:3000/api/products' + idProduct)

        .then(res => res.json()) //récuper resultat au format json
        .then(product => { // quand se passe bien

        }
        )

    let colors = "";
    for (let color of product.colors) {
        colors += "<option value=" + color + ">" + color + "</option>";
    }

}*/
/* let colors = "";
for (let color of product.colors) {
  colors += "<option value=" + color + ">" + color + "</option>";
}*/

//const description = document.querySelector("#description");
//const title = document.querySelector("#title");
//title.innerHTML = product.name;

/*import Panier from "./class/panier.js";
import ApiProducts from "./class/apiProduct.js";

/*
const displayProduct = async () => {
  const id = new URLSearchParams(document.location.search).get("id"); // Récupération des paramètres envoyés dans l'URL , puis du produit associé à l'ID
  const product = await ApiProducts.getProducts(
    `http://localhost:3000/api/products/${id}`
  );
  if (Object.keys(product).length === 0) {
    alert("l'identifiant du produit n'est pas correct");
    window.location.replace("./index.html");
  }*/


/* marche pas
etch('http://localhost:3000/api/products' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(function (article) { // quand se passe bien
    const titleProduct = document.getElementById("title");
    const priceProduct = document.getElementById("price");
    const descriptionProduct = document.getElementById("description");
    const imgProduct = document.querySelector("item__img");
    const colorProduct = document.getElementById("colors");
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
    document.querySelector('#items').insertAdjacentHTML('beforeend', display)
  })
*/

/* marche pas
fetch('http://localhost:3000/api/products' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(data => { // quand se passe bien
let display  = (
`
      <img src="${article.imageUrl}" alt="${article.altTxt}">
      <h1 id="title">${article.name}</h1>
      <p>Prix : <span id="price">${article.price}</span>€</p>
      <p id="description">${article.decription}</p>`
)   
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
    document.querySelector('#items').insertAdjacentHTML('beforeend', display)
  })
  console.log(article)
  .catch(err => console.log(err)) //quand se passe mal */


   /* marche pas
   fetch('http://localhost:3000/api/products' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(function (article) { // quand se passe bien
    `
      <img src="${article.imageUrl}" alt="${article.altTxt}">
      <h1 id="title">${article.name}</h1>
      <p>Prix : <span id="price">${article.price}</span>€</p>
      <p id="description">${article.decription}</p>`
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
    document.querySelector('#items').insertAdjacentHTML('beforeend', display)
  })
  console.log(article)
  .catch(err => console.log(err)) //quand se passe mal*/

/* marche pas
fetch('http://localhost:3000/api/products/' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(product => { // quand se passe bien
    let descriptionProduct = document.getElementById("description");
    descriptionProduct.textContent = product.description;
    const titleProduct = document.getElementById("title");
    titleProduct.textContent = product.name;
    let priceProduct = document.getElementById("price");
    priceProduct.textContent = product.price;
    let imgProduct = document.createElement("item__img");
    imgProduct.src = product.imageUrl;
    imgProduct.alt = product.altTxt;
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
      color = document.getElementById("color");
    }
  }
  )
  .catch(err => console.log(err)) //quand se passe mal*/




/* marche pas
.then(products)  { // quand se passe bien
   /* for (product of products) {
    const titleProduct = document.getElementById("title");
    const priceProduct = document.getElementById("price");
    const descriptionProduct = document.getElementById("description");
    const imgProduct = document.querySelector("item__img");
    const colorProduct = document.getElementById("colors");
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
  }}
  console.log(article)*/



// document.createElement("article")
// appendChild

/* prendre adrresse page produit et mettre en id
tu recupere l'id passé dans ton url , tu la stock dans une variable
quand tu clic sur un objet ca t'ouvre une page product avec dans l'url l'id de l'article, il te sert a ca
ce qui veut dire qu'avec la variable qui contiendra ton id, tu pourra etre sur que ta fonction ,
 fonctionnera pour cet article precis, et pour ta requete api , tu lui passse l'id en parametre pour 
 que ton fetch interroge la page api/product/id plutot que toute l'api complete
ta requete passé avec l'id, te retournera un json comprenant les infos de cet objet/kanap précis, du 
coup tu urilisera la reponse de ce fetch pour chercher les valeur (reponse.price, reponse .title etc)
*/


/* parti cart
const regexName = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s,'-]$/i;
const regexAddress = /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s,'-]$/i;
const regexEmail = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;
Vaën — Aujourd’hui à 15:24
[A-Za-zÀ-ÖØ-öø-ÿ]
[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]
u00c0 = https://en.wikipedia.org/wiki/Latin-1_Supplement
Latin-1 Supplement
The Latin-1 Supplement (also called C1 Controls and Latin-1 Supplement) is the second Unicode block in the Unicode standard. It encodes the upper range of ISO 8859-1: 80 (U+0080) - FF (U+00FF). C1 Controls (0080–009F) are not graphic. This block ranges from U+0080 to U+00FF, contains 128 characters and includes the C1 controls, Latin-1 punctuati...
*/