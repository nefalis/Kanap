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

    // Boucle FOR OF pour les tableau
    for (const prod of productStorage) {

        fetch("http://localhost:3000/api/products/" + prod.idProduct)
            .then(res => res.json())
            .then(product => {

                console.log(prod);
                console.log(product);

                document.getElementById('cart__items').insertAdjacentHTML('beforeend',
                    `<article class="cart__item" data-id="${product._id}" data-color="${product.colors}">
                  <div class="cart__item__img">
                    <img src="${product.imageUrl}" alt="${product.altTxt}">
                  </div>
                  <div class="cart__item__content">

                    <div class="cart__item__content__description">
                      <h2>${product.name}</h2>
                      <p>${prod.colorProduct}<p>
                    <p>${product.price} € </p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${prod.quantityProduct}">
                      </div>
                      <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                      </div>
                    </div>
                  </div>
                </article>`
                )
            }
            )
            .catch(error => alert("Erreur : " + error));
    }
}

getCart()





// etape 9
// modifier la quantité
// supprimer
// addevenlistenr changement qte
// element.closest cible pour supprimer