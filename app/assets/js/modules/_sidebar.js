var open = document.querySelector('.open');
var navbarSlide = document.querySelector('.sidebar');
var close = document.querySelector('.closes');

open.addEventListener('click', () => {
    navbarSlide.classList.add('active');
    open.classList.remove('active');
    close.classList.add('active');
})

close.addEventListener('click', () => {
    navbarSlide.classList.remove('active');
    open.classList.add('active');
    close.classList.remove('active');
})