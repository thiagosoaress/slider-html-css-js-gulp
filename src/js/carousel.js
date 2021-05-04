feather.replace();

const nextEl = document.getElementById('next');
const previousEl = document.getElementById('previous');
const sliderEl = document.getElementById('slider');

nextEl.addEventListener('click', onNextClick);
previousEl.addEventListener('click', onPreviousClick);

function onNextClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += imgWidth; 

    if (sliderEl.scrollLeft > imgWidth) {
        sliderEl.scrollLeft = 0;
    }
}

function onPreviousClick() {
    const imgWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= imgWidth; 

    console.log('Click Previous ', sliderEl.scrollLeft, imgWidth);
}
