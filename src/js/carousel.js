feather.replace();

const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const sliderEl = document.getElementById('slider');
const coutImages = document.querySelectorAll('.img');

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);

function onNextClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += imgWidth; 
    console.log('Click Next ', sliderEl.scrollLeft, imgWidth);
    if (sliderEl.scrollLeft > imgWidth) {
        sliderEl.scrollLeft = 0;
    }
}

function onPreviousClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= imgWidth; 

    console.log('Click Previous ', sliderEl.scrollLeft, imgWidth);

    if (sliderEl.scrollLeft == 0) {
        sliderEl.scrollLeft = imgWidth * (coutImages.length - 1);
    }
}
