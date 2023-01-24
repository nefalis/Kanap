
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

        createItem(product, prod)
        deleteItem()
        quantityChange()

      }
      )
      .catch(error => alert("Erreur : " + error));
  }
}
getCart()

function createItem(product, prod) {
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


function deleteItem() {

  const buttonDelete = document.querySelectorAll(".deleteItem")
  //console.log(buttonDelete);  

  for (let element of buttonDelete) {

    console.log("tadam");

    element.addEventListener("click", (e) => {

      console.log("pouet");

      //parent proche avec closest
      let closest = element.closest(".cart__item");

      // selection du produit par couleur et id
      let closestColor = closest.getAttribute("data-color")
      let closestId = closest.getAttribute("data-id")

      console.log(closestColor);
      console.log(closestId);

      // on retire les element avec splice
      for (let product of productStorage) {

        if (product.color === closestColor && product.id === closestId) {

          // 1 pour supprimer que 1 element
          // indexof element qu'on cherche
          productStorage.splice(productStorage.indexOf(product), 1);

        }
      }
      // modif les nouvelle valeur
      localStorage.setItem("panier", JSON.stringify(productStorage))
    })
  }
}
deleteItem();


// changement quantité

function quantityChange() {

  const buttonChange = document.querySelectorAll(".itemQuantity")

  for (let element of buttonChange) {
    element.addEventListener("change", () => {

      console.log("ting");

      let closest = element.closest(".cart__item");

      let closestColor = closest.getAttribute("data-color")
      let closestId = closest.getAttribute("data-id")

      for (let product of productStorage) {

        if (product.color === closestColor && product.id === closestId) {
          product.quantity = parseInt(element.value)
        }

      }

      localStorage.setItem("panier", JSON.stringify(productStorage))

    })
  }
}

quantityChange();

////// etape 10
// valider la commande
// récupérer les données
// analyser les données saisies
// afficher message d'erreur
// test pour verif fonctionnement regex

// je veux verifier les données saisie
// si pas bonne saisie message erreur

// bouton commande
// click recupere donnée

////////////////////////////



/////////////////// prénom et nom

const nameRegex = //formulaire regex
  /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

//element du DOM
let firstNameForm = document.getElementById("firstName");
let lastNameForm = document.getElementById("lastName");

// prenom
firstNameForm.addEventListener("change", (e) => {
  textInput(nameRegex, firstNameForm.value, "firstNameErrorMsg");
});

console.log(firstNameForm);

// nom
lastNameForm.addEventListener("change", (e) => {
  textInput(nameRegex, lastNameForm.value, "lastNameErrorMsg");
});

console.log(lastNameForm);

/////////////// adresse

const addressRegex =
  /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]*$/;

let addressForm = document.getElementById("address");

addressForm.addEventListener("change", (e) => {
  textInput(addressRegex, addressForm.value, "addressErrorMsg");
});

console.log(addressForm);

////////////////////// ville

const cityRegex =
  /^([0-9]{5}).[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let cityForm = document.getElementById("city");

cityForm.addEventListener("change", (e) => {
  textInput(cityRegex, cityForm.value, "cityErrorMsg");
});

console.log(cityForm);

//////////////////// email

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let emailForm = document.getElementById("email");

emailForm.addEventListener("change", (e) => {
  textInput(emailRegex, emailForm.value, "emailErrorMsg");
});

console.log(emailForm);