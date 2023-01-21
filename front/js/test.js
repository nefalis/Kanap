/*
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

//console.log(productStorage[i].idProduct);
 //console.log(product[0]._id);      

const cartInfo = product.find(product => product._id === productStorage[i].idProduct)



        document.getElementById('cart__items').insertAdjacentHTML('beforeend',
          `<article class="cart__item" data-id="${productStorage[i].idProduct._id}" data-color="${productStorage[i].colorProduct}">
                  <div class="cart__item__img">
                    <img src="${cartInfo.imageUrl}" alt="${cartInfo.altTxt}">
                  </div>
                  <div class="cart__item__content">
  
                    <div class="cart__item__content__description">
                      <h2>${cartInfo.name}</h2>
                      <p>${productStorage[i].colorProduct}</p>
                    <p>${cartInfo.price} € </p>
                    </div>
                    <div class="cart__item__content__settings">
                      <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productStorage[i].quantityProduct}">
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


// etape 9
// modifier la quantité
// supprimer
// addevenlistenr changement qte
// element.closest cible pour supprimer

// changement quantité


console.log("trululuuu"); */
    


    
 /*
 //boutton supprimer et modifier
const buttonDelete = document.querySelectorAll(".deleteItem")
console.log(buttonDelete);

const buttonChange = document.querySelectorAll(".itemQuantity");
console.log(buttonChange);



// supprimer le panier

function deleteItem () {

  for (let i = 0; i < buttonDelete.length; i++){

buttonDelete[i].addEventListener("click", (e) => {
console.log("opaf");

  if (confirm ("Voulez vous supprimer cet article du panier ? ") == true) {

    let itemRemove = productStorage[i].id

    console.log(itemRemove);

    newProductStorage = productStorage.filter(e => e.id !== itemRemove)

    localStorage.setItem("panier", JSON.stringify(newProductStorage))

    window.location.reload();
  }
})
}
}
deleteItem();


//changement quantité

function change () {

  for (let i = 0; i < buttonChange.length; i++){

buttonChange.addEventListener('click', (e) => {

  let modificationValue = buttonChange[i].value
console.log("pouet");
console.log(modificationValue);
console.log(buttonChange);

  //si modif superieur a 0 ou inf a 100
  if (modificationValue > 0 && modificationValue <= 100) {
    panier[i]. quantity = modificationValue;

    productStorage.setItem("panier", JSON.stringify(productStorage))
  }

//si sup a 100 
else if (modificationValue >100) {
  alert("La quantité est trop élevé")
}

// si 0
else (modificationValue <0 ) 
{
  if (confirm("Voulez vous supprimer cet article du panier ?") == true) {

    // modification du local storage
    let itemRemove = productStorage[i].id

    newProductStorage = productStorage.filter(e => e.id !== itemRemove)

    localStorage.setItem("panier", JSON.stringify(newProductStorage))
  }
}

})

  }
}
change();





console.log("trululuuu");
*/