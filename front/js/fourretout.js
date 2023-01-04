
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


 // test 3 video training dev
 /*
 //recupere item
function getBasket() {
  let basket = localStorage.getItem('basket');
  if (basket == null) {
    return [];
  }
  else {
    return JSON.parse(basket);
  }
}

// ajout au panier
function addBasket(product) {
  let basket = getBasket(); //recupere panier
  let foundProduct = basket.find(p => p.id == product.id); // chercher dans panier produit dans id produit voulu
  if (foundProduct != undefined) { //si trouve produit identique
    foundProduct.quantity++; //ajout +1
  }
  else {
    product.quantity = 1;
    basket.push(product); //push ajout produit dans tableau
  }
  saveBasket(basket); //enregistre nouveau panier
}

//supprimer element dans panier
function removeFromBasket(product) {
  let basket = getBasket();
  basket = basket.filter(p => p.id != product.id); //permet de supprimer par id
  saveBasket(basket);
}

//changer la quantitée
function changeQuantity(product, quantity){
  let basket = getBasket(); //recupere panier
  let foundProduct = basket.find(p => p.id == product.id); // chercher dans panier produit dans id produit voulu
  if (foundProduct != undefined) { //si produit identique
    foundProduct.quantity += quantity; 
    if( foundProduct.quantity <= 0) {
      removeFromBasket(foundProduct);
    }
    else {
      saveBasket(basket); //enregistre nouveau panier
    }
  }
}

// calcul quantitée

function getNumberProduct(){
let basket = getBasket();
let number =0;
  for (product of basket){
    number += product.quantity;
  }
  return number;
}

// calcul prix total
function getTotalPrice (){
  let basket = getBasket();
  let total =0;
    for (product of basket){
      total += product.quantity * product.price;
    }
    return total;

}
*/

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

    // test 6
    function ajoutPanier(article) {
      const button = document.querySelector("#addToCart"); 
    
      // Options limite de quantité + Choix 
      button.addEventListener("click", (event)=>{
        if (chooseQuantity.value > 0 && chooseQuantity.value <=100 && chooseQuantity.value != 0){
    
     let colorChoose = chooseColor.value;
     let quantityChoose = chooseQuantity.value;
    
     // Tableau Récapitulatif
     let data = { 
      callProductId: callId,
      pColor: colorChoose,
      pQuantity: Number(quantityChoose),
      pName: article.name,
      pPrice: article.price,
      pDescription: article.description,
      pImage: article.imageUrl,
    };
    
    //  Alerte
    const popup = () => {
      if (window.confirm(`Votre commande de ${quantityChoose} 
                                            ${article.name} 
                                            ${colorChoose} 
      est ajoutée au panier. Pour consulter votre panier, cliquez sur OK`)) {
        window.location.href = "cart.html";
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
          parseInt(data.pQuantity) + parseInt(responseProduct. pQuantity);
          responseProduct.pQuantity = quantityAdd;
          localStorage.setItem("produit", JSON.stringify(storageLocal));
          console.table(storageLocal);
          alertCart();
    
      //Condition produit pas dans le panier
      } else {
          storageLocal.push(data);
          localStorage.setItem("produit", JSON.stringify(storageLocal));
          console.table(storageLocal);
          alertCart();
      }
    //Condition panier  vide
    } else {
      storageLocal =[];
      storageLocal.push(data);
      localStorage.setItem("produit", JSON.stringify(storageLocal));
      console.table(storageLocal);
      alertCart();
    }}
    });
    }
    // Fin de Fonction
    
    
    
    /* test 7
    //récupération couleur et quantité
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
    })*/

// git quelquun
    // Récuperer l'id du produit à afficher dans l'URL
let urlQueryParams = new URLSearchParams(window.location.search);
let params = Object.fromEntries(urlQueryParams.entries());
let id = params.id;
let productObject = {}

//Récupérer des packages depuis le fichier json
//Afficher les produits qu'on a choisis
fetch("http://localhost:3000/api/products")
  .then(res => res.json())
  .then(data => {
    console.log(data)
    data.forEach(content => {
      if(content._id == id) {
        productObject = content
        addContent(content)
      }
    });
  })
  .catch(error => console.log(error));

  //Créer des éléments
  let select = document.getElementById("colors");
  function addContent (content) {
    let imgContainer = document.querySelector(".item__img"); 
    let img = document.createElement("img");
    img.src = content.imageUrl;
    img.alt = content.altTxt;
    imgContainer.appendChild(img); 

    document.getElementById("title").innerHTML = content.name;
    document.getElementById("price").innerHTML = content.price;
    document.getElementById("description").innerHTML = content.description;

    content.colors.forEach(color => {
      let newOption = new Option(color.toLowerCase(), color.toLowerCase());
      select.appendChild(newOption);
    })
  }

  //Ajouter le produit au pannier
  let bouton = document.getElementById("addToCart");
  let quantity = document.getElementById("quantity");

  // Au clic, on ajoute un produit dans le panier
  bouton.addEventListener("click", () => {

    let cart = localStorage.getItem("cart") // Le panier
    let quantityValue = parseInt(quantity.value); // La quantite choisie 

    if (select.value != '') {
      // On verifie que la quantite choisie est bien comprise entre 1 a 100
      if (quantityValue > 0 && quantityValue <= 100) {

        // Les donnes a garder en memoire au clic
      
        var selection = {
          "altTxt": productObject.altTxt,
          "color": select.value,
          "description": productObject.description,
          "imageUrl": productObject.imageUrl,
          "name": productObject.name,
          "_id": id,
          "quantity": quantityValue,
        }

        // Si le panier n'existe pas, 
        // on cree un premier tableau avec la selection
        if (cart == null) {
          localStorage.setItem("cart", JSON.stringify([selection]));
        } else {

          // Si le panier existe,
          // on garde en memoire la selection
          let cartData = JSON.parse(cart)
          // on verifie si la meme id et meme cloleur, on change la quantite
          //si non, on ajoute un nouvel object dans le localStorage
          let foundColor = cartData.find(p => (p._id == selection._id && p.color == selection.color));
          if (foundColor != undefined) {
            foundColor.quantity = foundColor.quantity + selection.quantity;
          } else {
            cartData.push(selection)
          }
          
          localStorage.setItem("cart", JSON.stringify(cartData))
          
        }
        console.log(JSON.parse(cart))
        
      // Sinon, on affiche une alerte
      } else {
        alert("Veuillez choisir entre 1 a 100 produits.")
      }
    } else {
      alert("Veuillez choisir une couleur")
    }
    
})

//test9 
/*
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
*/


/* ......................................................
page cart ............................................*/


// test 1
//gestion panier
function getCart() {

  //gestion du panier vide 
  if (productStorage == null || productStorage.lenght == 0 ) {
    document.getElementById("cart__items").innerHTML += `Votre panier est vide`;
  
  }
  
  // gestion panier plein
  else {
    document.getElementById("cart__items").innerHTML += `Votre panier`;
    
  
  //fiche produit dans le panier 
  
  for (i = 0 ; i < productStorage.length ; i += 1) {
  
  document.getElementById('cart__items').insertAdjacentHTML('beforeend', 
    `<article class="cart__item" data-id="${productStorage[i]._id}" data-color="${productStorage[i].color}">
                  <div class="cart__item__img">
                    <img src="${productStorage[i].imageUrl}" alt="${productStorage[i].altTxt}">
                  </div>
                  <div class="cart__item__content">
  
                    <div class="cart__item__content__description">
                      <h2>${productStorage[i].name}</h2>
                      <p>${productStorage[i].color}</p>
                      <p>${productStorage[i].price}</p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productStorage[i].qty}">
                      </div>
                      <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article>`
                
  
  )
  }
  }
  }
  getCart();
  console.log(productStorage);