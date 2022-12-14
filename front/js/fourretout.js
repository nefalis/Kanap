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

  /*//Affiche les produits dans le panier
let productsIds = [];
fetch("http://localhost:3000/api/products")
  .then(res => res.json())
  .then(data => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    for (i = 0; i < cart.length; i++) {
      let cartProduct = cart[i];
      let orignalProduct = data.find(item => item._id == cartProduct._id)
      productsIds.push(cartProduct._id)
      displayCartProduct(cartProduct, orignalProduct);

      // Total prix
      let totalPrice = document.getElementById("totalPrice");
      totalPrice.innerHTML = totalPrix(data);

    }
  })
  .catch(err => console.error(err))*/

  //location.reload(); raffraichit page

  //find



  /*//Lien avec LocalStorage et conditions
let storageLocal = JSON.parse(localStorage.getItem("produit"));

// Declaration constante
const panierVide = document.querySelector("#cart__items");

///////////////// recupération des prix produits ///////////////////
storageLocal.forEach(produit => {
    fetch("http://localhost:3000/api/products/" + produit.callProductId)
    .then((res) => {
        return res.json();
    })
    .then(async function (response) {
        if (await response){
            addToPanier(produit, response.price);
            totalCost(response.price);
        }
    })
    // Message d'erreur
    .catch((error) => {
        console.log(error);
    })
});*/

/*
// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('cart'));
//const panierVide = document.querySelector("#cart__items");


// Récupération du prix
fetch("http://localhost:3000/api/products/")
.then(res => res.json())
.then(product => {

  //const priceProduct = document.getElementById('price');
 // priceProduct.innerHTML = product.price;

const totalPrice = document.getElementById('totalPrice');
totalPrice.innerHTML = product.totalPrice;
   
  console.log(totalPrice);
})
.catch(error => alert("Erreur : " + error));*/


/*----------------test-----------------------------------
//gestion panier
function getCart() {

  //gestion du panier vide 
  if (productStorage == null || productStorage == 0 ) {
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
  }}
  }}
  getCart();
  
  //console.log(productStorage);

*/  

//test2 ---------------------
// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('product'));

//gestion panier
function getCart() {


  // Récupération du prix
fetch("http://localhost:3000/api/products/")
.then(res => res.json())
.then(product => {

const priceProduct = document.getElementById('price');
priceProduct.textContent = product.price;

const totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = product.totalPrice;


})
//.catch(error => alert("Erreur : " + error));

//gestion du panier vide 
if (productStorage == null || productStorage == 0 ) {
  document.getElementById("cart__items").innerHTML += `Votre panier est vide`;
}

// gestion panier plein
else {
  document.getElementById("cart__items").innerHTML += `Votre panier`;

// fiche produit dans le panier 
for (i = 0 ; i < productStorage.length ; i += 1) {

document.getElementById('cart__items').insertAdjacentHTML('beforeend', 
  `<article class="cart__item" data-id="${productStorage[i]._id}" data-color="${productStorage[i].color}">
                <div class="cart__item__img">
                  <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
                </div>
                <div class="cart__item__content">

                  <div class="cart__item__content__description">
                    <h2>${product[i].name}</h2>
                    <p>${productStorage[i].color}</p>
                  <p>${product[i].price}</p>
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


}}
 console.log(productStorage); 

}
getCart();

//console.log(productStorage); */

// ---------------------------
//test 3
/*// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('product'));

console.log("pouet");

//gestion panier
function getCart() {

  // Récupération du prix
fetch("http://localhost:3000/api/products/")
.then(res => res.json())
.then(data => {

let display =''
for (let article of data) {

  display += 
  `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
  <div class="cart__item__img">
    <img src="${article.imageUrl}" alt="${article.altTxt}">
  </div>
  <div class="cart__item__content">

    <div class="cart__item__content__description">
      <h2>${article.name}</h2>
      <p>Vert</p>
    <p>${article.price}</p>
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



console.log("pouet pouet");
console.log(display);

}
document.querySelector('#items').insertAdjacentHTML('beforeend', display) 
})
//.catch(error => alert("Erreur : " + error));


//gestion du panier vide 
if (productStorage == null || productStorage == 0 ) {
  document.getElementById("cart__items").innerHTML += `Votre panier est vide`;

  console.log("c'est videeuuuuhhh");
}


// gestion panier plein
else {
  document.getElementById("cart__items").innerHTML += `Votre panier`;

console.log("trululu");

// fiche produit dans le panier 
for (i = 0 ; i < productStorage.length ; i += 1) {

document.getElementById('cart__items').insertAdjacentHTML('beforeend', 
  `<article class="cart__item" data-id="${productStorage[i]._id}" data-color="${productStorage[i].color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">

                  <div class="cart__item__content__description">
                  <h2>Nom du produit</h2>
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


}}
 
}
getCart();*/

///--------------------test 4
/*// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('product'));

//gestion panier
function getCart() {


  // Récupération du prix
fetch("http://localhost:3000/api/products/")
.then(res => res.json())
.then(product => {

const priceProduct = document.getElementById('price');
priceProduct.textContent = product.price;

const totalPrice = document.getElementById('totalPrice');
totalPrice.textContent = product.totalPrice;

console.log("pouet");

})
//.catch(error => alert("Erreur : " + error));

//gestion du panier vide 
if (productStorage == null || productStorage == 0 ) {
  document.getElementById("cart__items").innerHTML += `Votre panier est vide`;
  console.log("c'est videuuuuuhhhh");
}

// gestion panier plein
else {
  document.getElementById("cart__items").innerHTML += `Votre panier`;
  console.log('il y a un canap !!');

// fiche produit dans le panier 
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


}}
 //console.log(productStorage); 
 console.log("trululuuuu");

}
getCart();

//console.log(productStorage); */

/* ////////////////////////////////////
// Récupération des produits stockés dans le LocalStorage
let products = JSON.parse(localStorage.getItem("products"));

// Vérification de l'existence des produits dans le LocalStorage
if (products !== null) {
    // Boucle pour parcourir les produits
    for (let i = 0; i < products.length; i++) {
        // Récupération des informations du produit
        let product = products[i];
        console.log(product);
        // Affichage du produit sur la page
        let productName = document.createElement("p");
        productName.innerHTML = product.name;
        document.body.appendChild(productName);
    }
} else {
    console.log("Aucun produit n'est stocké dans le LocalStorage");
}*/


/* ///////////////////////////
fetch('https://example.com/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });*/