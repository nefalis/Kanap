// récupération id
const idProduct = new URL(window.location.href).searchParams.get("id");
console.log(idProduct)


// récupération produits DOM et inserer dans le HTML
fetch('http://localhost:3000/api/products/' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(product => { // quand se passe bien

    const descriptionProduct = document.getElementById("description"); //on recup element
    descriptionProduct.textContent = product.description; //on injecte dans html

    const titleProduct = document.getElementById("title");
    titleProduct.textContent = product.name;

    const priceProduct = document.getElementById("price");
    priceProduct.textContent = product.price;

    const imgProduct = document.querySelector(".item__img");
    imgProduct.innerHTML = `<img src="${product.imageUrl}"  alt="${product.altTxt}">`;

    const colorProduct = document.getElementById("colors");
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
    colorProduct.innerHTML = colors;
  }
  )

  .catch(err => console.log(err)) //quand se passe mal


// Localstorage et panier

//enregistrer panier dans localstorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(addToCart)); //stringify transform objet donné en chaine caract
}
// récupère item
function getCart() {
  let cart = localStorage.getItem("cart");
  if (cart == null) {//si donnée n'existe pas devient null
    return [];
  }
  else {
    return JSON.parse(cart); //parse chaine caract transform en objet
  }
}
//ajout au panier
function addCart(product) {
  let cart = getCart();
  let foundProduct = cart.find(p => p.id == product.id); //find permet de chercher dans tableau
  if(foundProduct != undefined){
    foundProduct.quantity++;
  }
  else {
    product.quantity = 1;
      cart.push(product); //push ajout produit dans tableau
  }
  saveCart(cart); //sauvegarde apres ajout
}
// retirer produit panier
function removeCart(product) {
  let cart = getCart(); 
}
console.log(saveCart);
