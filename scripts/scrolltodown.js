/**
 * Scroll to Down
 */

const scrolltodown = document.querySelector('[data-scrolltodown-btn]');

/**
 * @param {HTMLDivElement} current 
 */
function setPageActive(current) {
    document.querySelectorAll('div.page[page-active]').forEach(function(elem) {
        elem.removeAttribute('page-active');
    });
    current.setAttribute('page-active', '');
}

document.querySelectorAll('div.page').forEach(function(elem) {
    elem.addEventListener('mouseenter', () => setPageActive(elem));
});

scrolltodown.addEventListener('click', function() {
    let activePage = document.querySelector('[page-active]');
    let id = parseInt(activePage.classList.item(1).substring(4));
    let newPage = document.querySelector(`div.page${id + 1}`);
    if(!newPage) return;
    setPageActive(newPage);
    newPage.scrollIntoView({ behavior: 'smooth' });
});