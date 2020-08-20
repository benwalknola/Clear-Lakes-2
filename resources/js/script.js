let slides = document.querySelectorAll('.slide');
let slides2 = document.querySelectorAll('.slide-2')
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const next2 = document.querySelector('#next-2');
const prev2 = document.querySelector('#prev-2');
const auto = true;
const intervalTime = 6000;
const intervalTime2 = 5500;
let slideInterval;
let slideInterval2;

let nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current')
    if (current.nextElementSibling) {
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
    setTimeout(() => current.classList.remove('current-2'));
}

let nextSlide2 = () => {
    const current2 = document.querySelector('.current-2');
    current2.classList.remove('current-2')

    if(current2.nextElementSibling) {
        current2.nextElementSibling.classList.add('current-2')
    } else {
        slides2[0].classList.add('current-2');
    }
    setTimeout(() => current2.classList.remove('current-2'));
}


let prevSlide2 = () => {
    const current2 = document.querySelector('.current-2');
    current2.classList.remove('current-2')
    if (current2.previousElementSibling) {
        current2.previousElementSibling.classList.add('current-2') 
    } else {
        slides2[slides2.length - 1].classList.add('current-2')
    }
    setTimeout(() => current2.classList.remove('current-2'));
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

next2.addEventListener('click', e => {
    nextSlide2();
    if (auto) {
        clearInterval(slideInterval2);
        slideInterval2 = setInterval(nextSlide2, intervalTime2);
    }
});

prev2.addEventListener('click', e => {
    prevSlide2();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide2, intervalTime2);
    }
});

// Auto Slide 

if (auto) {
    // run next slide at interval time 
    slideInterval = setInterval(nextSlide, intervalTime)
    slideInterval2 = setInterval(nextSlide2, intervalTime2)
}