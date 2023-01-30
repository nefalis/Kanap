
// récupération de l'id de commande

const newLocal = new URL(window.location.href)

const id = newLocal.searchParams.get("orderId")


document.getElementById("orderId").innerHTML = id;



localStorage.clear(); // suppression du localstorage

console.log(newLocal);
console.log(id);
console.log(orderId);


