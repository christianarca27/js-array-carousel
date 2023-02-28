const pics = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const carouselEl = document.getElementById("carousel");
console.log(carouselEl);

const carouselImgEl = document.getElementById("carousel-img");
console.log(carouselImgEl);

const topButtonEl = document.getElementById("top-button");
console.log(topButtonEl);

const bottomButtonEl = document.getElementById("bottom-button");
console.log(bottomButtonEl);

const previewsEl = document.getElementById("previews");
console.log(previewsEl);

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

let index = 0;

carouselImgEl.src = pics[index];

previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

topButtonEl.addEventListener("click", function() {
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.remove("active");    

    index--;
    index += pics.length;
    index %= pics.length;
    console.log(index);
    
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

    carouselImgEl.src = pics[index];
});

bottomButtonEl.addEventListener("click", function() {
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.remove("active"); 

    index++;
    index %= pics.length;
    console.log(index);
    
    previewsEl.querySelectorAll(".preview-img-wrapper").item(index).classList.add("active");

    carouselImgEl.src = pics[index];
});

