// - Lavoriamo con il DOM: creare una pagina HTML con 3 paragrafi e 3 bottoni. 
//     - Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
//     - il secondo dovra’ rendere il testo dei paragrafi in grassetto 
//     - il terzo dovra’ far scomparire e ricomparire i paragrafi(ricordatevi  della proprieta’ “display: none” in CSS)!



// let p = document.querySelectorAll('p');

// let button1 = document.querySelector('#btn1');

// button1.addEventListener(`click`, () => {
//     for (let i = 0; i < p.length; i++) {

//         let red = Math.floor(Math.random() * (255 - 0));
//         let green = Math.floor(Math.random() * (255 - 0));
//         let blue = Math.floor(Math.random() * (255 - 0));
    
//        p[i].style.color = `rgb(${red}, ${green}, ${blue})`
//     }
// })


// let button2 = document.querySelector('#btn2');

// let isbold = true

// button2.addEventListener(`click`, () => {
     
//     if (isbold == true) {
//         p.forEach(p => {
//             p.style.fontWeight = `bold`;
//         isbold = false
//         })
//     }else {
//         p.forEach(p => {
//             p.style.fontWeight = `normal`;
//             isbold = true
//         })
//     }
// })


// let button3 = document.querySelector('#btn3');

// let dNone = true

// button3.addEventListener(`click`, () => {
      
//     if (dNone == true) {
//         p.forEach(p =>{
//             p.style.display = `none`;
//             dNone = false
//         })
//     }else {
//         p.forEach(p => {
//             p.style.display = `block`;
//             dNone = true
//         })
//     }
// })

// - Inserire nel file html due campi input ed un pulsante per generare un articolo:
//     - un campo per inserire un titolo
//     - un campo per inserire un paragrafo
//     - un campo per inserire un colore da applicare, ad esempio allo sfondo dell’articolo
//         - suggerimento, utilizzate il tag input con l’attributo type=”color”
// - EXTRA: inserire nell’articolo anche la data di pubblicazione tramite questa istruzione:let date = new Date();
    // let formatDate = date.toLocaleDateString()


    // - Implementare la seguente funzionalita’:
    //     - al click del pulsante, dovrete creare un articolo popolato dai valori prelevati dai campi input


  
// let title = document.querySelector(`#title`)
// let description = document.querySelector(`#description`)
// let shadow = document.querySelector(`#shadow`)

// let btnArticle = document.querySelector(`#btnArticle`)

// let containerArticle = document.querySelector(`.containerArticle`)


// btnArticle.addEventListener(`click`, () => {
//     let article = document.createElement(`article`);

//     article.style.boxShadow = `10px 10px 15px ${shadow.value}`

//     article.innerHTML =
//     `<h2>${title.value}</h2>
//     <p>${description.value}</p>
//     `;
//     containerArticle.appendChild(article)

// })