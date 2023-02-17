
// Récuperer le contenu du panier dans le localstorage ou tableau vide
let productStorage = JSON.parse(localStorage.getItem('panier')) || [];

// Fonction de démarrage et de mise en place
const start = () => {

  getCart()
    .then(() => {
      // Mise en place terminée ajout des listeners
      addListenerDeleteItem()
      addListenerQuantityChange()
    })
}

/**
 * gestion du panier
 */
const getCart = async () => {

  if (productStorage == null || productStorage == 0) {  //gestion du panier vide 
    document.getElementById("cart__items").innerHTML += `Votre panier est vide`;
  }

  else { // gestion panier plein
    document.getElementById("cart__items").innerHTML += `Votre panier`;
  }

  for (const prod of productStorage) {  // Récupération info produit dans l'API et le localstorage

    let res = await fetch("http://localhost:3000/api/products/" + prod.idProduct)
    let product = await res.json()
    createItem(product, prod)
  }
  return true
}

/**
 * Fonction pour générer l'HTML d'un article
 * @param {object} product 
 * @param {object} prod 
 */
function createItem(product, prod) {
  document.getElementById('cart__items').insertAdjacentHTML('beforeend',
    `<article class="cart__item" data-id="${product._id}" data-color="${prod.colorProduct}">
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

/**
 * calcul quantité total article
 */
function displayTotalQuantity() {

  const totalQuantity = document.getElementById("totalQuantity")
  let total = 0

  productStorage.forEach(prod => {
    total += prod.quantityProduct
  })
  totalQuantity.textContent = total
}
displayTotalQuantity();

/**
 * calcul quantité total prix
 */
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

/**
 * Supprimer un article du panier
 */
function addListenerDeleteItem() {

  const buttonDelete = document.querySelectorAll(".deleteItem")

  for (let element of buttonDelete) {
    element.addEventListener("click", (e) => {

      let closest = element.closest(".cart__item");

      // selection du produit par couleur et id
      let closestColor = closest.getAttribute("data-color")
      let closestId = closest.getAttribute("data-id")

      // Récuperer le contenu du panier dans le localstorage ou tableau vide
      productStorage = JSON.parse(localStorage.getItem('panier')) || [];

      for (let product of productStorage) {     // on retire les element avec splice

        if (product.colorProduct === closestColor && product.idProduct === closestId) {
          productStorage.splice(element, 1);
          closest.remove();

          alert("Produit supprimé")

        }
      }
      // Changement des valeurs dnas le local storage
      localStorage.setItem("panier", JSON.stringify(productStorage))

      // Recalcul des totaux
      displayTotalQuantity()
      displayTotalPrice()
    })
  }
}

/**
 * Changement de quantité
 */
function addListenerQuantityChange() {

  const buttonChange = document.querySelectorAll(".itemQuantity")

  for (let element of buttonChange) {
    element.addEventListener("change", () => {

      let closest = element.closest(".cart__item");
      let closestColor = closest.getAttribute("data-color")
      let closestId = closest.getAttribute("data-id")

      for (let product of productStorage) {

        if (product.colorProduct === closestColor && product.idProduct === closestId) {

          // Vérification si nouvelle quantité supérieur ou égale à 0 avec message de suppression ou de saisie de nouvelle quantité
          if (parseInt(element.value) < 1) {

            if (confirm("Voulez vous supprimer cet article ? ") == true) {
              productStorage.splice(element, 1);
              closest.remove();
            }
            else (alert("Quantité invalide. Veuillez resaisir la quantité"))
            return false // Arrêt code mais pas de blocage
          }

          // Vérification si nouvelle quantité inférieur ou égale à 100
          if (parseInt(element.value) >= 100) {
            alert("Quantité max limité à 100");
            return false // Arrêt code mais pas de blocage
          }
          product.quantityProduct = parseInt(element.value)
        }
      }
      localStorage.setItem("panier", JSON.stringify(productStorage))

      // Recalcul des totaux
      displayTotalQuantity()
      displayTotalPrice()
    })
  }
}

addListenerQuantityChange();

// formulaire

// prenom
let firstNameForm = document.getElementById("firstName");  //element du DOM
function validName(input) {
  return /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(input)
}

firstNameForm.addEventListener("change", (e) => {
  if (validName(firstNameForm.value) == false) {
    firstNameError.innerText = "Veuillez entrer un prénom sans caractères spéciaux"
  }
  else {
    firstNameError.textContent = "Prénom valide";
  }
});

// nom
let lastNameForm = document.getElementById("lastName");
function validName(input) {
  return /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(input)
}

lastNameForm.addEventListener("change", (e) => {
  if (validName(lastNameForm.value) == false) {
    lastNameError.innerText = "Veuillez entrer un nom sans caractères spéciaux"
  }
  else {
    lastNameError.textContent = "Nom valide";
  }
});

// adresse
let addressForm = document.getElementById("address");
function validAddress(input) {
  return /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]*$/.test(input)
}

addressForm.addEventListener("change", (e) => {
  if (validAddress(addressForm.value) == false) {
    addressError.innerText = "Veuillez entrer une adresse sans caractères spéciaux"
  }
  else {
    addressError.textContent = "Adresse valide"
  }
});

// ville
let cityForm = document.getElementById("city");
function validCity(input) {
  return /^[a-zA-Z0-9àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ\s\,\'\-]*$/.test(input)
}

cityForm.addEventListener("change", (e) => {
  if (validCity(cityForm.value) == false) {
    cityError.innerText = "Veuillez entrer une ville sans caractères spéciaux"
  }
  else {
    cityError.textContent = "Ville valide"
  }
});

// email
let emailForm = document.getElementById("email");
function validEmail(input) {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input)
}

emailForm.addEventListener("change", (e) => {
  if (validEmail(emailForm.value) == false) {
    emailError.innerText = "format email valide : exemple@domaine.com"
  }
  else {
    emailError.innerText = "Email valide"
  }
});

// Messages d'erreur
const firstNameError = document.getElementById("firstNameErrorMsg");
const lastNameError = document.getElementById("lastNameErrorMsg");
const addressError = document.getElementById("addressErrorMsg");
const cityError = document.getElementById("cityErrorMsg");
const emailError = document.getElementById("emailErrorMsg");


//  commander

const postUrl = 'http://localhost:3000/api/products/order';

const orderBtn = document.getElementById("order");

orderBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //Vérification si le formulaire est bien rempli
  if (firstNameForm.value == "" || lastNameForm.value == "" || addressForm.value == "" || cityForm.value == "" || emailForm.value == "") {
    alert("Veuillez remplir tous les champs du formulaire");
  }

  else if (confirm("Confirmez-vous votre commande ? ") == true) {

    let arrayProduct = []

    // Récupération des données du formulaire
    let order = {
      contact: {
        firstName: firstNameForm.value,
        lastName: lastNameForm.value,
        address: addressForm.value,
        city: cityForm.value,
        email: emailForm.value
      },
      products: arrayProduct
    };

    // Requete POST envoi du formulaire dans la page confirmation
    const options = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    fetch(postUrl, options) // Appel de l'API
      .then(res => res.json())
      .then(datas => {

        // Envoie des informations dans la page confirmation
        window.location.href = "confirmation.html?orderId=" + datas.orderId;
      })
      .catch(error => {
        alert(error);
      })

  }
  else {
    return false;
  }
})

window.addEventListener('load', start)