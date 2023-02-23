
// Récupération id produit 
const idProduct = new URL(window.location.href).searchParams.get("id");

// Récupération des produits DOM et inserer dans le HTML
fetch('http://localhost:3000/api/products/' + idProduct)
  .then(res => res.json())
  .then(product => { 

    const descriptionProduct = document.getElementById("description"); //on recupère l'element
    descriptionProduct.textContent = product.description; //on injecte dans html

    const titleProduct = document.getElementById("title");
    titleProduct.textContent = product.name;

    const priceProduct = document.getElementById("price");
    priceProduct.textContent = product.price;

    const imgProduct = document.querySelector(".item__img");
    imgProduct.innerHTML = `<img src="${product.imageUrl}"  alt="${product.altTxt}">`;

    for (let colors of product.colors) { //boucle pour récupérer et afficher les couleurs
      let productColors = document.createElement("option");
      productColors.value = colors;
      productColors.innerHTML = colors;

      document.getElementById("colors").appendChild(productColors); //insertion des couleurs
    }
  }
  )
  .catch(err => console.log(err))

//Récupération couleur et quantité
const color = document.getElementById("colors");
const quantity = document.getElementById("quantity");

//Gestion du panier
const buttonProduct = document.getElementById("addToCart");

buttonProduct.addEventListener('click', (e) => {
  if (quantity.value <= 0 || quantity.value > 100) {  // Vérification mauvaise quantité
    alert("Veuillez indiquer une quantité entre 1 et 100")
  }
  else if (color.value == "") { // Vérification absence de couleur
    alert("Veuillez choisir une couleur")
  }

  if (quantity.value > 0 && quantity.value <= 100 && color.value !== "") { // si quantité et couleur ok

    // valeur Couleur - quantité
    let colorChoose = color.value;
    let quantityChoose = quantity.value;

    // Ajout localstorage ou tableau vide
    let cart = JSON.parse(localStorage.getItem("panier")) || [];

    // Vérification du contenu du panier 
    let resultFind = cart.find(
      el => el.idProduct === idProduct && el.colorProduct === colorChoose);

    // Si Produit deja dans panier
    if (resultFind) {
      let newQuantity = parseInt(quantityChoose) + parseInt(resultFind.quantityProduct);
      resultFind.quantityProduct = newQuantity;
    }

    // Si produit pas dans le panier  -  init en tableau
    else {
      const product = {
        idProduct: idProduct,
        colorProduct: colorChoose,
        quantityProduct: Number(quantityChoose),
      };
      cart.push(product);
    }

    alert("Le produit a été ajouté")
    localStorage.setItem("panier", JSON.stringify(cart));
  }
}
)


