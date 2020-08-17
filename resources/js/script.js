let slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 6000;
let slideInterval;

let nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current')
    if(current.nextElementSibling) {
        // Add current to the next sibling
        current.nextElementSibling.classList.add('current')
    } else {
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

let prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current')
    if (current.previousElementSibling) {
        // Add current to the next sibling
        current.previousElementSibling.classList.add('current')
    } else {
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto Slide 

if (auto) {
    // run next slide at interval time 
    slideInterval = setInterval(nextSlide, intervalTime)
}