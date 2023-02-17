
const start = () => {

    // Récupération des articles
    fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => { 

            let display = '' //Stock résultat dans display pour allèger le code
            for (let article of data) { 

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
            document.querySelector('#items').insertAdjacentHTML('beforeend', display) //beforeend permet de positionner à la fin
        })
        .catch(err => console.log(err))
}

window.addEventListener('load', start) //Attend que DOM fini pour lancer 
