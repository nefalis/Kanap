

//etape 7
// array [id produit, quantité, couleur]
// pas depasser les 100
// localstorage
// incremente objet et par couleur
// bouton qui fonctionne et fait ajour panier -> listener
// fonction ajout panier et quand click message avec console log
// localstorage 2 fonctions -sauvegarder dans localstorage - recuperer
// mettre message si pas couleur ou quantité
// cible
// recupere 
// stock

/* Pour l'evenement tu dois cibler l'element du dom par son Id par exemple , 
document.getElementById("addToCart") ici , et tu lui greffe le addEventListener 
dessus en lui passant en parametre l'evenement qui tu attend, ici "click", et en 
second parametre le nom de la fonction qui sera appelé en cas de click

Tu creer cette fonction dans un premier temps tu lui fais juste faire un console.log
 ("c'est cliqué") pour verifier que ton bouton marche
 deja faire le bouton qui fais juste un console log, ensuite comprendre le 
 fonctionnement du localstorage, et ensuite reflechir a la fonction en elle meme
 
 Essaye de voir si tu as compris le push() pour les tableau, comment recuperer 
 une valeur affichée dans element (ici ce sera recuperer la valeur de la quantité,
  ou bien la couleur dans l'element colors)
Tu regardes comment on fait, tu cibles, tu recupere, tu stock, tu affiches avec
 un console.log pour voir si ca fonctionn
 */

 //json.parse 
 /*let productCart = JSON.parse(localStorage.getItem("cart"));
 console.log(productCart); 
 
 let productLocalStorage = JSON.parse(localStorage.getItem("cart"));*/

 /* Ajouté un article au panier
let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", addToCart); 
tous element avec id ajout au panier
addeventlistener ajout au click


*/
 //array.prototype.find()

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

/* parti cart
const regexName = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s,'-]$/i;
const regexAddress = /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s,'-]$/i;
const regexEmail = /^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$/i;

[A-Za-zÀ-ÖØ-öø-ÿ]
[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]
u00c0 = https://en.wikipedia.org/wiki/Latin-1_Supplement
Latin-1 Supplement
The Latin-1 Supplement (also called C1 Controls and Latin-1 Supplement) is the second Unicode block in the Unicode standard. It encodes the upper range of ISO 8859-1: 80 (U+0080) - FF (U+00FF). C1 Controls (0080–009F) are not graphic. This block ranges from U+0080 to U+00FF, contains 128 characters and includes the C1 controls, Latin-1 punctuati...
*/




// test 1
/*const buttonProduct = document.getElementById('addToCart')
if (buttonProduct != null) {//si donnée n'existe pas devient null 
buttonProduct.addEventListener('click', () => { //evenement au click
const color = document.querySelector("#colors")
const quantity = document.querySelector("#quantity")
localStorage.setItem(id, addToCart)
// si champ non renseignée
if (color == null) 
alert("Veuillez renseignée une couleur")
if (quantity == null) 
alert("Veuillez renseignée une quantitée")  
if (color == null && quantity == null )
alert("Veuillez renseignée une quantitée et une couleur") 
console.log(quantity);
})
}
*/

// test 2
/*
const buttonProduct = document.getElementById('addToCart')
if (buttonProduct != null) //si donnée n'existe pas devient nul
buttonProduct.addEventListener('click', validation) //evenement au click

// vérification des données de saisie
function validation () {
const quantity = document.getElementById('quantity')
if (colors == null) {
alert("Merci de choisir une couleur")
}
if (quantity == 0 || quantity > 100) {
alert("Merci de choisir une quantitée")  
}
if (colors == null && quantity == null ) {
alert("Merci de mettre une quantitée et une couleur")
}
}
console.log(colors);*/


 // test 3
 /*
// enregistrer panier dans localstorage
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
console.log(saveCart);*/

//test4
/*
const buttonProduct = document.getElementById('addToCart')
  buttonProduct.addEventListener('click', () => { //evenement au click
    const color = document.querySelector("colors")
    const quantity = document.querySelector("quantity")
    // si champ non renseignée
    if (color == null)
      alert("Merci de choisir une couleur")
    if (quantity == null)
      alert("Merci de choisir une quantitée")
    if (color == null && quantity == null)
      alert("Merci de mettre une quantitée et une couleur")
    console.log(quantity);

    localStorage.setItem(idProduct, color, quantity)
  })
console.log(buttonProduct);
*/


/* test 5
const buttonProduct = document.getElementById('addToCart')

buttonProduct.addEventListener('click', addToCart);  //evenement au click

  function addToCart () {
  const color = document.querySelector("#colors")
  const quantity = document.querySelector("#quantity")

localStorage.setItem(id, JSON.stringify(data)); //stringify transform objet donné en chaine caract
 
// si champ non renseignée
  if (color == null)
    alert("Merci de choisir une couleur")
  if (quantity == null)
    alert("Merci de choisir une quantitée")
  if (color == null && quantity == null)
    alert("Merci de mettre une quantitée et une couleur")

  const data = {
    id: idProduct,
    color: color,
    quantity: Number(quantity),
  }
  //parse transform chaine caract en objet
}
console.log(buttonProduct);*/

//projet quelquun 1
/*
// modification quantite 
quantity.addEventListener("change", (e) => {
// Si pas d'articles de même id/couleur dans le panier et quantité < 100  on sauvegarde la valeur saisie
  if (
    e.target.value < 0 ||
    Number.isInteger(parseInt(e.target.value)) != true
  ) {
    alert("La quantité doit être un entier positif");
    quantity.value = 1;
  } else if (
    Panier.checkQuantite(id, couleurs.value) === 0 &&
    e.target.value <= 100
  ) {
    quantity.value = e.target.value;
  } else if (
    Panier.checkQuantite(id, couleurs.value) === 0 &&
    e.target.value > 100
  ) {
    alert("La quantité d'un produit ne doit pas dépasser 100.");
    quantity.value = 100;
  } else if (
    Panier.checkQuantite(id, couleurs.value) + parseInt(e.target.value) >
    100
  ) {
    alert(
      `La quantité ne doit totale ne doit pas dépasser 100 !  Il y a déjà ${Panier.checkQuantite(
        id,
        couleurs.value
      )} articles ${title.innerHTML} de couleur ${
        couleurs.value
      } dans le panier `
    );

    quantity.value = 100 - Panier.checkQuantite(id, couleurs.value);
  } else {
    quantity.value = e.target.value;
  }
});
//  AjoutPanier  
document.getElementById("addToCart").addEventListener("click", () => {
  ajoutPanier(id);
});
};
// Ajout Panier  
const ajoutPanier = (id) => {
const quantite = parseInt(document.querySelector("#quantity").value);
const colors = document.querySelector("#colors");

if (colors.value === "") {
  alert("Vous n'avez pas sélectionné de couleur");
} else if (quantite === 0) {
  alert("Vous n'avez pas sélectionné de quantité");
} else {
  Panier.add({ id: id, quantite: quantite, couleur: colors.value });
  alert("Produit bien ajouté");
  window.location.replace("./cart.html");
}
};
displayProduct(); */



// projet quelquun 2
/*
// Ajouté un article au panier
let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", addToCart);

function addToCart() {

    const colorChoice = document. querySelector("#colors");
    const quantityChoice = document.querySelector("#quantity");

    if (quantityChoice.value > 0 && quantityChoice.value <=100 && quantityChoice.value != 0 && colorChoice.value != 0) { 

        if (localStorage.getItem("cart")) {
    
            let productCart = JSON.parse(localStorage.getItem("cart"));
            console.log(productCart);

            let idKanap = idProduct;
            let colorKanap = document.querySelector("#colors").value;
            let qtyKanap = document.querySelector("#quantity").value;

            const resultFind = productCart.find(
                (el) => el.idKanap === idProduct && el.colorKanap === colorKanap);
                //Si le produit commandé est déjà dans le panier
                console.log("result find est egal a :");
                console.log(resultFind);
                console.log("fin result find");

                if (resultFind) {
                    console.log("resultfind kanap = " + resultFind.qtyKanap);
                    console.log("qtykanap = " + qtyKanap);
                    let newQuantite = parseInt(qtyKanap) + parseInt(resultFind.qtyKanap);
                    console.log("newQtt est egal a : " + newQuantite);
                    resultFind.qtyKanap = newQuantite;
                    localStorage.setItem("cart", JSON.stringify(productCart));
                    console.log("productCart egal :");
                    console.log(productCart);
                    console.log("fin productCart");
                //Si le produit commandé n'est pas dans le panier
                } else {
                    
                    let productCart = JSON.parse(localStorage.getItem("cart"));

                    let idKanap = idProduct;
                    let nameKanap = document.querySelector("#title").textContent;
                    let colorKanap = document.querySelector("#colors").value;
                    let qtyKanap = document.querySelector("#quantity").value;
                    let imgKanap = img.src; 
                    let altImg = img.alt;
                    let priceKanap = document.querySelector("#price").textContent;
                    
                    console.log(img);
                    console.log(idKanap, nameKanap, colorKanap, qtyKanap, imgKanap, altImg, priceKanap);
                
                    let productCartObj = {
                        idKanap : idProduct,
                        nameKanap : nameKanap,
                        colorKanap : colorKanap,
                        qtyKanap  : qtyKanap,
                        imgKanap : imgKanap,
                        altImg : altImg,
                        priceKanap : priceKanap
                    };
                
                    productCart.push(productCartObj);
                
                    let objCart = JSON.stringify(productCart);
                    localStorage.setItem("cart", objCart);
                
                    alert("Ajouté au panier !");
                }

        } else {

            let productCart = [];

            let idKanap = idProduct;
            let nameKanap = document.querySelector("#title").textContent;
            let colorKanap = document.querySelector("#colors").value;
            let qtyKanap = document.querySelector("#quantity").value;
            let imgKanap = img.src; 
            let altImg = img.alt;
            let priceKanap = document.querySelector("#price").textContent;
            
            console.log(img);
            console.log(idKanap, nameKanap, colorKanap, qtyKanap, imgKanap, altImg, priceKanap);
        
            let productCartObj = {
                idKanap : idProduct,
                nameKanap : nameKanap,
                colorKanap : colorKanap,
                qtyKanap  : qtyKanap,
                imgKanap : imgKanap,
                altImg : altImg,
                priceKanap : priceKanap
            };
        
            productCart.push(productCartObj);
        
            let objCart = JSON.stringify(productCart);
            localStorage.setItem("cart", objCart);
        
            alert("Ajouté au panier !");    
        }
    }
}*/

// projet quelquun 3
/*
// let getelement = document.getElementById('title');
//     getelement.innerHTML = stringArticle.name;

// Appel a créer un nouvel URL
let call = window.location.href;
let urlNew = new URL(call);
let callId = urlNew.searchParams.get("id");
console.log(callId);
let stringArticle = "";


// Appel API
callProduct();

function callProduct() {
    fetch("http://localhost:3000/api/products/" + callId)
    .then((res) => {
        return res.json();
    })
    .then(async function (response) {
        stringArticle = await response;
        console.table(stringArticle);
        if (stringArticle){
            recupProduct(stringArticle);
        }
    })
    // Message d'erreur
    .catch((error) => {
        console.log("Un problème est survenue lors de la récupération");
    })
}
// Fin de Fonction

// Déclaration des constantes couleur
const chooseColor = document.querySelector("#colors");
const chooseQuantity = document.querySelector("#quantity");

    
// Création et modifications des élements /page Product
function recupProduct(article){
    
    let modifImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(modifImg);
    modifImg.src = article.imageUrl;
    modifImg.alt = article.altTxt;

    let modifName = document.getElementById('title');
    modifName.innerHTML = article.name;

    let modifPrice = document.getElementById('price');
    modifPrice.innerHTML = article.price;

    let modifDescription = document.getElementById('description');
    modifDescription.innerHTML = article.description;

//    Paramètres des couleurs
    for (let colors of article.colors){
        console.table(colors);
        let productColors = document.createElement("option");
        document.querySelector("#colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }
    ajoutPanier(article);
}
// Fin de Fonction

// Ajout au panier + options 
function ajoutPanier(article) {
    const button = document.querySelector("#addToCart");

    // Options limite de quantité + Choix 
    button.addEventListener("click", (event)=>{
        if (chooseQuantity.value > 0 && chooseQuantity.value <=100 && chooseQuantity.value != 0){

     let colorChoose = chooseColor.value;
     let quantityChoose = chooseQuantity.value;
    
    // Tableau Récapitulatif
    let arrayProduct = { 
        callProductId: callId,
        pColor: colorChoose,
        pQuantity: Number(quantityChoose),
        pName: article.name,
        pPrice: article.price,
        pDescription: article.description,
        pImage: article.imageUrl,
        pTXT: article.altTxt
    };

    //  Alerte
    const alertCart =() =>{
        if(window.confirm(` Votre produit ${article.name} avec une quantité de ${quantityChoose} et de couleur  ${colorChoose} est ajoutée a votre panier
Veuillez confirmer pour accéder au panier `)){
            window.location.href ="cart.html";
        }
    }

    //Lien avec LocalStorage et conditions
    let storageLocal = JSON.parse(localStorage.getItem("produit"));

    //Condition 1 article au moins
    if (storageLocal) {
    const responseProduct = storageLocal.find(
        (add) => add.callProductId === callId && add.pColor === colorChoose);

        //Condition produit déja dans le panier
        if (responseProduct) {
            let quantityAdd =
            parseInt(arrayProduct.pQuantity) + parseInt(responseProduct. pQuantity);
            responseProduct.pQuantity = quantityAdd;
            localStorage.setItem("produit", JSON.stringify(storageLocal));
            console.table(storageLocal);
            alertCart();

        //Condition produit pas dans le panier
        } else {
            storageLocal.push(arrayProduct);
            localStorage.setItem("produit", JSON.stringify(storageLocal));
            console.table(storageLocal);
            alertCart();
        }
    //Condition panier  vide
    } else {
        storageLocal =[];
        storageLocal.push(arrayProduct);
        localStorage.setItem("produit", JSON.stringify(storageLocal));
        console.table(storageLocal);
        alertCart();
    }}
    });
}
// Fin de Fonction
*/

// test 4
/*//récupération couleur et quantité
const color = document.querySelector("#colors");
const quantity = document.querySelector("#quantity");

//gestion du panier
function addToCart(article) {
  const buttonProduct = document.getElementById('addToCart');
}

//Evenement au click 

buttonProduct.addEventListener('click', (event) => {
  if (quantityProduct.value > 0 && quantityProduct.value <= 00 && quantityProduct.value != 0) {

    // valeur Couleur - quantité
    let colorChoose = chooseColor.value;
    let quantityChoose = chooseQuantity.value;

    // elements ajouté au panier

    const data = {
      idProduct: idProduct,
      colorProduct: colorChoose,
      quantityProduct: Number(quantityChoose),
      nameProduct: article.name,
      priceProduct: article.price,
      imgProduct: article.imageUrl,
      descriptionProduct: article.description,
    };

    //fenetre confirmation
    const popup = () => {
      if (window.confirm(`Votre commande de ${quantityChoose} 
                                            ${article.name} 
                                            ${chooseColor} 
      est ajoutée au panier. Pour consulter votre panier, cliquez sur OK`)) {
        window.location.href = "cart.html";
      }
    }

// ajout localstorage
    let productLocalStorage = JSON.parse(localStorage.getItem("product"));
  }
})
//Importation dans le local storage
    //Si le panier comporte déjà au moins 1 article
    if (produitLocalStorage) {
      const resultFind = produitLocalStorage.find(
          (el) => el.idProduit === idProduct && el.couleurProduit === choixCouleur);
          //Si le produit commandé est déjà dans le panier
          if (resultFind) {
              let newQuantite =
              parseInt(optionsProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
              resultFind.quantiteProduit = newQuantite;
              localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
              console.table(produitLocalStorage);
              popupConfirmation();
          //Si le produit commandé n'est pas dans le panier
          } else {
              produitLocalStorage.push(optionsProduit);
              localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
              console.table(produitLocalStorage);
              popupConfirmation();
          }
      //Si le panier est vide
      } else {
          produitLocalStorage =[];
          produitLocalStorage.push(optionsProduit);
          localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
          console.table(produitLocalStorage);
          popupConfirmation();
      }}
      });
  }
  
  localStorage.setItem(id, JSON.stringify(data)); //stringify transform objet donné en chaine caract
  
 si champ non renseignée
  if (color == null)
    alert("Merci de choisir une couleur")
  if (quantity == null)
    alert("Merci de choisir une quantitée")
  if (color == null && quantity == null)
    alert("Merci de mettre une quantitée et une couleur")

    parse transform chaine caract en objet
    */