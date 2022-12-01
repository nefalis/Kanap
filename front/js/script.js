
const start = () => {

    // recuperation des articles
    fetch('http://localhost:3000/api/products')
        .then(res => res.json()) //récuper resultat au format json
        .then(data => { // quand se passe bien

            let display = ''
            for (let article of data) { //boucle

                /* += concatenation à la volée 1 11 111 1111 ...*/
                display += ` 
        <a href="./product.html?id=${article._id}">
            <article>
                <img src="${article.imageUrl}" alt="${article.altTxt}">
                <h3 class="productName">${article.name}</h3>
                <p class="productDescription">${article.description}</p>
            </article>
        </a>
    `
            }
            console.log(display)
            document.querySelector('#items').insertAdjacentHTML('beforeend', display)
        })
        // insertadjacenthtml remplace innerhtml

        .catch(err => console.log(err)) //quand se passe mal

}

window.addEventListener('load', start) //attend que DOm fini pour lancer JS