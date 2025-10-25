const header = document.querySelector('header');

const hamburger = header.querySelector('a.hamburger');
hamburger.addEventListener('click', () => {
    header.classList.toggle('active');
});