
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
        addListenerDeleteItem()
        addListenerQuantityChange()

      }
      )
      .catch(error => alert("Erreur : " + error));
  }
}
getCart()

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

// supprimer le panier

function addListenerDeleteItem() {

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
      //console.log(closestId);

      confirm("Etes vous sur de vouloir supprimer ce produit ? ")

      // on retire les element avec splice
      for (let product of productStorage) {


        if (product.colorProduct === closestColor && product.idProduct === closestId) {

          // 1 pour supprimer que 1 element

          productStorage.splice(element, 1);
        }
      }

      closest.remove();

      // modif les nouvelle valeur
      localStorage.setItem("panier", JSON.stringify(productStorage))
    })
  }

}
addListenerDeleteItem();

// changement quantité

function addListenerQuantityChange() {

  const buttonChange = document.querySelectorAll(".itemQuantity")

  for (let element of buttonChange) {
    element.addEventListener("change", () => {

      console.log("ting");

      let closest = element.closest(".cart__item");

      let closestColor = closest.getAttribute("data-color")
      let closestId = closest.getAttribute("data-id")

      for (let product of productStorage) {

        console.log("tralalala");

        if (product.colorProduct === closestColor && product.idProduct === closestId) {
          console.log('dans le if')
          // Vérification si nouvelle quantité inférieur ou égale à 100
          if (parseInt(element.value) >= 100) {
            alert("Quantité max limité à 100");
            return false // Arrêt code mais pas de blocage
          }

          product.quantityProduct = parseInt(element.value)
        }
      }
      localStorage.setItem("panier", JSON.stringify(productStorage))

    })
  }
}

addListenerQuantityChange();

/////////////////////// formulaire

// prenom

let firstNameForm = document.getElementById("firstName");  //element du DOM
function validName(input) {
  return /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/.test(input)
}

firstNameForm.addEventListener("change", (e) => {
  if (validName(firstNameForm.value) == false) {
    firstNameError.innerText = "Veuillez entrer une adresse sans caractères spéciaux"
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
    lastNameError.innerText = "Veuillez entrer une adresse sans caractères spéciaux"
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
    cityError.innerText = "Veuillez entrer une adresse sans caractères spéciaux"
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
    emailError.innerText = "format email : exemple@domaine.com"
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

////////////  commander


const postUrl = 'http://localhost:3000/api/products/order';

const orderBtn = document.getElementById("order");

orderBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (firstNameForm.value == "" || lastNameForm.value == "" || addressForm.value == "" || cityForm.value == "" || emailForm.value == "") {
    alert("Veuillez remplir tous les champs du formulaire");
  }

  else if (confirm("Confirmez-vous votre commande ? ") == true) {

    let arrayProduct = [];

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

    const options = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    fetch(postUrl, options)
      .then(res => res.json())
      .then(datas => {
        console.log(datas);

        // SECURE ORDER ID, EXPORT TO URL
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
