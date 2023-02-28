const pics = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const carouselEl = document.getElementById("carousel");
console.log(carouselEl);

const carouselImgEl = document.getElementById("carousel-img");
console.log(carouselImgEl);

const topButtonEl = document.getElementById("top-button");
console.log(topButtonEl);

const bottomButtonEl = document.getElementById("bottom-button");
console.log(bottomButtonEl);

let index = 0;

carouselImgEl.src = pics[index];

topButtonEl.addEventListener("click", function() {
    index--;
    index += pics.length;
    index %= pics.length;
    console.log(index);

    carouselImgEl.src = pics[index];
});

bottomButtonEl.addEventListener("click", function() {
    index++;
    index %= pics.length;
    console.log(index);

    carouselImgEl.src = pics[index];
});

