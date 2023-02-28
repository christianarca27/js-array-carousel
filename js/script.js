// Inizializzo array di immagini da inserire nel carosello
const pics = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// Leggo e salvo i riferimenti agli elementi presenti nel documento
const carouselEl = document.getElementById("carousel");
const carouselImgEl = document.getElementById("carousel-img");
const topButtonEl = document.getElementById("top-button");
const bottomButtonEl = document.getElementById("bottom-button");
const previewsEl = document.getElementById("previews");

// Riempio la previews con n-elementi (n = numero di immagini da inserire):
//  - Creo un nuovo elemento div previewImgWrapperEl
//  - Gli assegno la classe preview-img-wrapper
//  - Gli do altezza pari al 100% / n
//  - Gli assegno position = relative per fare da riferimento al before che scurisce la preview
//  - Appendo il nuovo previewImgWrapperEl al previewsEl
//  - Creo un nuovo elemento img previewImgEl
//  - Gli assegno la classe preview-img
//  - Gli collego la corretta immagine dall'array pics[]
//  - Appendo il nuovo previewImgEl al previewImgWrapperEl
for(let i = 0; i < pics.length; i++) {
    let previewImgWrapperEl = document.createElement("div");
    previewImgWrapperEl.classList.add("preview-img-wrapper");
    previewImgWrapperEl.style.height = 100 / pics.length + "%";
    previewImgWrapperEl.style.position = "relative";

    previewsEl.append(previewImgWrapperEl);

    let previewImgEl = document.createElement("img");
    previewImgEl.classList.add("preview-img");
    previewImgEl.src = pics[i];

    previewImgWrapperEl.append(previewImgEl);
}

// Inizializzo l'immagine da mostrare al caricamento della pagina e attivo la sua preview
let index = 0;
carouselImgEl.src = pics[index];
previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

// All'evento di click del tasto top:
//  - Rimuovo la preview dell'immagine attuale come attiva
//  - Decremento index (e gestisco eventuali overflow)
//  - Assegno pics[index] come preview attiva
//  - Inserisco pics[index] come immagine del carosello
topButtonEl.addEventListener("click", function() {
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.remove("active");    

    index--;
    index += pics.length;
    index %= pics.length;
    
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

    carouselImgEl.src = pics[index];
});

// All'evento di click del tasto bottom:
//  - Rimuovo la preview dell'immagine attuale come attiva
//  - Incremento index (e gestisco eventuali overflow)
//  - Assegno pics[index] come preview attiva
//  - Inserisco pics[index] come immagine del carosello
bottomButtonEl.addEventListener("click", function() {
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.remove("active"); 

    index++;
    index %= pics.length;
    
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

    carouselImgEl.src = pics[index];
});

