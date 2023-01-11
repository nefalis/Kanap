
//gestion panier
function getCart() {

    // Récuperer le contenu du panier dans le localstorage
    const productStorage = JSON.parse(localStorage.getItem('panier'));
    
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
     console.log(productStorage); 
    
     console.log("trululuuuu");
    
    }
    getCart();
    
    //console.log(productStorage); 
    
    ////////////////////////////////////////////////////////////////////////////
    // calcul total quantité et prix

function getTotal() {

    const elementQty = document.getElementById('itemQuantity');
    const lengthCart = elementQty.length,
    totalQty = 0;
    
    for (var i=0; i < lengthCart; ++i) {
     totalQty += elementQty[i].valueAsNumber;
    }
    
    let productTotalQuantity = document.getElementById('totalQuantity');
    productTotalQuantity.innerHTML = totalQty;
    
    
    totalPrice = 0;
    
    for (const i = 0; i < lengthCart; ++i) {
      totalPrice += (elementQty[i].valueAsNumber * productStorage[i].price);
    }
    
    let productTotalPrice = document.getElementById('totalPrice');
    productTotalPrice.innerHTML = totalPrice;
    
    console.log("trululuu");
    }
    getTotal();

    /////////////////////////////////////////////////

    
// calcul total quantité et prix

async function displayNumberTotal() {

    let productStorage = await getCart();
    let totalQuantity = 0;
  
    //  article dans panier  quantitées additionner dansvariable
    for (let product of productStorage) {
      totalQuantity += parseInt(product.quantity);
    }
  
    // on retourne la variable contenant le total des quantitées dans le DOM
    return document.getElementById("totalQuantity").textContent = totalQuantity;
  }
  
  // on appelle la fonction pour afficher son résultat
  displayNumberTotal()
  
  ////////////////////////////////////////////////////
  // prix total

const displayTotalPrice = async () => {
    if (productStorage) {
      await getCart();
      
      // Calcul du prix total
      let totalPrice = 0;
  
      productStorage.forEach((productInCart) => {
        console.log(productInCart);
        totalPrice +=
          parseInt(productInCart.quantity) *
          PriceMath(productInCart._id, parseInt(productInCart.quantity));
      });
      //Insertion du HTML du prix total après que l'on ait affiché les produits du panier
      document.getElementById("cartAndFormContainer").insertAdjacentHTML(
        "afterend",
        `<div class="cart__price">
        <p>
          Total (<span id="totalQuantity">${product.length}</span> articles) :
          <span id="totalPrice">${totalPrice}</span> €
        </p>
        </div>`
      );
    }
  };
  displayTotalPrice();
  