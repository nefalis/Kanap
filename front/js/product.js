// récupération id
const idProduct = new URL(window.location.href).searchParams.get("id");
console.log (idProduct)


// récupération produits et inserer dans le DOM
fetch('http://localhost:3000/api/products/' + idProduct)
  .then(res => res.json()) //récuper resultat au format json
  .then(product => { // quand se passe bien

    const descriptionProduct = document.getElementById("description");
    descriptionProduct.textContent = product.description;

    const titleProduct = document.getElementById("title");
    titleProduct.textContent = product.name;

    const priceProduct = document.getElementById("price");
    priceProduct.textContent = product.price;

    const imgProduct = document.querySelector(".item__img");
    imgProduct.innerHTML = `<img src="${product.imageUrl}"  alt="${product.altTxt}">`;
   
    const colorProduct = document.getElementById("colors");
    let colors = "";
    for (let color of product.colors) {
      colors += "<option value=" + color + ">" + color + "</option>";
    }
    colorProduct.innerHTML = colors;
  }
  )

  .catch(err => console.log(err)) //quand se passe mal
