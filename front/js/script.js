
const start = () => {

    // recuperation des articles
    fetch('http://localhost:3000/api/products')
        .then(res => res.json()) //récuper resultat au format json
        .then(data => { // quand se passe bien

            let display = '' //stock resultat dans display pour alleger le code
            for (let article of data) { //boucle car tableau (8articles)

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
            document.querySelector('#items').insertAdjacentHTML('beforeend', display) //beforeend permet depositionner a la fin
        })
     
        .catch(err => console.log(err)) //quand se passe mal

}

window.addEventListener('load', start) //attend que DOm fini pour lancer JS

//$ permet d'interpreter sans $ c'est du texte
// ` indique texte