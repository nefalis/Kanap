// on récupre l'url
const url = new URL(window.location.href);

// récuperer l'id
const idProduct = url.searchParams.get("id");

// elements produits

/*fetch('http://localhost:3000/api/products')
        .then(res => res.json()) //récuper resultat au format json
        .then(product => { // quand se passe bien
            document.querySelector('#items').insertAdjacentHTML('beforeend', display) //?
        })
        .catch(err => console.log(err)) //quand se passe mal*/

let titleProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");

console.log (priceProduct);


/* prendre adrresse page produit et mettre en id
tu recupere l'id passé dans ton url , tu la stock dans une variable
quand tu clic sur un objet ca t'ouvre une page product avec dans l'url l'id de l'article, il te sert a ca
ce qui veut dire qu'avec la variable qui contiendra ton id, tu pourra etre sur que ta fonction ,
 fonctionnera pour cet article precis, et pour ta requete api , tu lui passse l'id en parametre pour 
 que ton fetch interroge la page api/product/id plutot que toute l'api complete
ta requete passé avec l'id, te retournera un json comprenant les infos de cet objet/kanap précis, du 
coup tu urilisera la reponse de ce fetch pour chercher les valeur (reponse.price, reponse .title etc)
*/

/*  
    - je vais chercher le carton (id)
    - je mets le carton dans la zone produit
    - je lui dit quoi regarder dans le carton (prix couleur, image, ... ) 
    - indiquer quantité max a prendre
    - emmener objet du carton selectionner dans panier
*/