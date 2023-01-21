
// Récuperer le contenu du panier dans le localstorage
const productStorage = JSON.parse(localStorage.getItem('panier'));

//gestion panier
function getCart() {

  //gestion du panier vide 
  if (productStorage == null || productStorage == 0) {
    document.getElementById("cart__items").innerHTML += `Votre panier est vide`;
  }

  // gestion panier plein
  else {
    document.getElementById("cart__items").innerHTML += `Votre panier`;
  }

  // Boucle FOR OF pour les tableaux
  // recupération info produit
  for (const prod of productStorage) {

    fetch("http://localhost:3000/api/products/" + prod.idProduct)
      .then(res => res.json())
      .then(product => {

        // console.log(prod);
        //console.log(product);

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


// total articles

function displayTotalQuantity() {

  const totalQuantity = document.getElementById("totalQuantity")
  let total = 0
  productStorage.forEach(prod => {
    total += prod.quantityProduct

  })
  totalQuantity.textContent = total

}
displayTotalQuantity();


// total prix

function displayTotalPrice() {
  const totalPrice = document.getElementById("totalPrice")
  let total = 0

  productStorage.forEach(object => {

    fetch("http://localhost:3000/api/products/" + object.idProduct)
      .then(res => res.json())
      .then(product => {

        const totalUnitPrice = product.price * object.quantityProduct

        total += totalUnitPrice
        totalPrice.textContent = total

      })
  })

}
displayTotalPrice();

// etape 9
// modifier la quantité
// supprimer
// addevenlistenr changement qte
// element.closest cible pour supprimer


// supprimer le panier

const buttonDelete = document.querySelectorAll(".deleteItem")
console.log(buttonDelete);  

for (let element of buttonDelete) {

 console.log("tadam");

 element.addEventListener("click", (e) => {

  //parent proche avec closes
  let closest = element.closest(".cart__item");

// selection du produit par couleur et id
let closestColor = closest.getAttribute("data-color")
let closestId = closest.getAttribute("data-id")

// on retire les element avec splice
for (let product of productStorage) {

  if (product.color === closestColor && product.id === closestId) {

    // 1 pour supprimer que 1 element
    productStorage.splice(panier.indexOf(product), 1);
    
  }
}
// modif les nouvelle valeur
localStorage.setItem("panier", JSON.stringify(productStorage))
 })


}
 
 // changement quantité
 
 const buttonChange = document.querySelectorAll(".itemQuantity")

 for (let element of buttonChange) {
  element.addEventListener("change", () => {
    let closest = element.closest(".cart__item");

    let closestColor = closest.getAttribute("data-color")
let closestId = closest.getAttribute("data-id")

for (let product of productStorage) {
  if (product.color === closestColor && product.id === closestId){
    product.quantity = element.value
  }
}

localStorage.setItem("panier", JSON.stringify(productStorage))

  })
 }



/*
//changement quantité

/*const buttonChange = document.querySelectorAll(".itemQuantity");
console.log(buttonChange);


function change () {

console.log("diung");

  for (let i = 0; i < buttonChange.length; i++){

buttonChange.addEventListener('click', (e) => {

console.log("pouet");

  let modificationValue = buttonChange[i].value

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
change();*/

console.log("trululuuu"); 

/*const buttonChange = document.querySelector(".itemQuantity");
console.log(buttonChange);


buttonChange.addEventListener('change', function()  {
  alert("pouet");
})*/

