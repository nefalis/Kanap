/* etape 8
- recupere article dans localstorage
- creer et inserer des elements
    - 1 seule ligne par produit identique
    */

// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('panier'));


//gestion panier
function getCart() {


  //gestion du panier vide 
  if (productStorage == null || productStorage == 0) {
    document.getElementById("cart__items").innerHTML += `Votre panier est vide`;

    console.log("c'est videuuuuuhhhh");
  }

  // gestion panier plein
  else {
    document.getElementById("cart__items").innerHTML += `Votre panier`;

    console.log('il y a un canap !!');
  }



  // Récupération fiche produit dans le panier
  fetch("http://localhost:3000/api/products/")
    .then(res => res.json())
    .then(product => {

      for (i = 0; i < productStorage.length; i++) {

        document.getElementById('cart__items').insertAdjacentHTML('beforeend',
          `<article class="cart__item" data-id="${product[i]._id}" data-color="${product[i].colors}">
                  <div class="cart__item__img">
                    <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
                  </div>
                  <div class="cart__item__content">
  
                    <div class="cart__item__content__description">
                      <h2>${product[i].name}</h2>
                      <p>${product[i].colors}</p>
                    <p>${product[i].price} € </p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product[i].qty}">
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
    )
    .catch(error => alert("Erreur : " + error));

}

getCart();

console.log("pouet");
console.log(productStorage);


console.log("trululuu");





// etape 9
// modifier la quantité
// supprimer
// addevenlistenr changement qte
// element.closest cible pour supprimer


