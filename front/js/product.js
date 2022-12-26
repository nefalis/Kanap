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

//récupération couleur et quantité
const color = document.querySelector("#colors");
const quantity = document.querySelector("#quantity");

//gestion du panier
  const buttonProduct = document.querySelector("#addToCart");

//Evenement au click 

buttonProduct.addEventListener('click', (e)=> {
  if (quantity.value > 0 && quantity.value <= 00 && quantity.value != 0) {

    // valeur Couleur - quantité
    let colorChoose = colorProduct.value;
    let quantityChoose = quantityProduct.value;

    // elements ajouté au panier

    const data = {
      idProduit: idProduct,
      colorProduct: colorChoose,
      quantityProduct: Number(quantityChoose),
      nameProduct: article.name,
      descriptionProduct: article.description,
      imgProduct: article.imageUrl,
    };


    // ajout localstorage
    let productLocalStorage = JSON.parse(localStorage.getItem("product"));


    //fenetre confirmation
    const alertCart = () => {
      if (window.confirm(`Votre commande de ${quantityChoose} 
                                            ${article.name} 
                                            ${colorChoose} 
      est ajoutée au panier. Pour consulter votre panier, cliquez sur OK`)) {
        window.location.href = "cart.html";
      }
    }

    // si panier comporte un article
    if (productLocalStorage) {
      const resultFind = productLocalStorage.find(
        (el) => el.idProduct === idProduct && el.colorProduct === colorChoose);


      // si produit deja dans panier
      if (resultFind) {
        let newQuantity = parseInt(data.quantityProduct) + parseInt(resultFind.quantityProduct);
        resultFind.quantityProduct = newQuantity;
        productLocalStorage.setItem("produit", JSON.stringify(productLocalStorage));
        console.table(productLocalStorage);
        alertCart();
      }
      // si produit pas dans le panier
      else {
        resultFind.push(data);
        productLocalStorage.setItem("produit", JSON.stringify(productLocalStorage));
        console.table(productLocalStorage);
        alertCart();
      }
    }
    // panier vide
    else {
      resultFind = [];
      resultFind.push(data);
      productLocalStorage.setItem("produit", JSON.stringify(productLocalStorage));
      console.table(productLocalStorage);
      alertCart();
    }
  }

})
