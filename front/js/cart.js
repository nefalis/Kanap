/* etape 8
- recupere article dans localstorage
- creer et inserer des elements
    - 1 seule ligne par produit identique
    */

// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('cart'));

// Appel des produits dans l'API
const apiProductUrl = 'http://localhost:3000/api/products/';


//gestion panier
fetch(apiProductUrl)
.then(res => res.json)
.then (product => {

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
})
console.log(productStorage);





