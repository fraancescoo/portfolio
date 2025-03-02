/**
 * Header
 */

const header = document.querySelector('[data-header]');
const headerUl = header.querySelector('ul');

window.addEventListener('scroll', function() {
    header.classList[this.scrollY > 200 ? 'add' : 'remove']('active');
});

/**
 * Mobile Bars
 */

const mobileBars = document.querySelector('[data-mobile-bars]');

if(document.body.hasAttribute('mobile')) {
    headerUl.classList.add('hidden');
}

mobileBars.addEventListener('click', function() {
    headerUl.classList.toggle('hidden');
});