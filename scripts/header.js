/**
 * Header
 */

const header = document.querySelector('header');

function adjustHeaderSize() {
    header.style.width = `${window.innerWidth - 10}px`;
}

window.addEventListener('resize', adjustHeaderSize);
adjustHeaderSize();

/**
 * Hamburger
 */

const hamburger = document.querySelector('#hamburger');
const hamburgersidebar = document.querySelector('.hamburgersidebar');

function toggleHamburgerSidebar() {
    hamburgersidebar.classList[hamburgersidebar.classList.contains('active') ? 'remove' : 'add']('active');
}

hamburger.addEventListener('click', toggleHamburgerSidebar);

function adjustHamburger() {
    if(hamburger && hamburger.computedStyleMap().get('display').value !== 'inline-block' && hamburgersidebar && hamburgersidebar.classList.contains('active'))
        hamburgersidebar.classList.remove('active');
}

window.addEventListener('resize', adjustHamburger);