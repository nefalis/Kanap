// mettre condition couleur
// message erreur quantité
// limite 100qte


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

    for (let colors of product.colors) {
      let productColors = document.createElement("option");
      document.getElementById("colors").appendChild(productColors);
      productColors.value = colors;
      productColors.innerHTML = colors;
    }
  }
  )

  .catch(err => console.log(err)) //quand se passe mal

//récupération couleur et quantité
const color = document.getElementById("colors");
const quantity = document.getElementById("quantity");

//gestion du panier
const buttonProduct = document.getElementById("addToCart");

buttonProduct.addEventListener('click', (e) => {

  if (quantity.value > 0 && quantity.value <= 100 && quantity.value != 0) {


    // valeur Couleur - quantité
    let colorChoose = color.value;
    let quantityChoose = quantity.value;

    // ajout localstorage ou tableau vide
    let cart = JSON.parse(localStorage.getItem("product")) || [];

    // si panier comporte un article
    let resultFind = cart.find(
      el => el.idProduct === idProduct && el.colorProduct === colorChoose);

    //console.log(resultFind);

    // si produit deja dans panier
    if (resultFind) {
      let newQuantity = parseInt(quantityChoose) + parseInt(resultFind.quantityProduct);
      resultFind.quantityProduct = newQuantity;
    }

    // si produit pas dans le panier init en tableau
    else {
      const product = {
        idProduct: idProduct,
        colorProduct: colorChoose,
        quantityProduct: Number(quantityChoose),
      };

      cart.push(product);
    }

    localStorage.setItem("product", JSON.stringify(cart));

  }


}
)


