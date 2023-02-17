
// Récupération de l'id de commande
const newLocal = new URL(window.location.href)
const id = newLocal.searchParams.get("orderId")

// Partie HTML de la page confirmation
document.getElementById("orderId").innerHTML = id;

// Suppression du localstorage
localStorage.removeItem("panier");




