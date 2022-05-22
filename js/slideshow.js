const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIdx = 0;
let slideCount = slide.length;
let slideWidth = 1200
let slideMargin = 30
slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

function moveSlide(num) {
    slides.style.left = -num * (1200 + 30) + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount - 1)
    {
        moveSlide(currentIdx + 1);
    }
    else{
        moveSlide(0);
    }
});
prevBtn.addEventListener('click', function(){
    if(currentIdx > 0)
    {
        moveSlide(currentIdx - 1);
    }
    else{
        moveSlide(slideCount - 1);
    }
});
