/**
 * Menu
 */

const menu = document.querySelector('div.menu');
const menuContainer = menu.querySelector('div.container');
const menuContent = menuContainer.querySelector('div.content');
const closeMenuButton = menuContainer.querySelector('i');

/**
 * @param {String} html 
 */
function openMenu(html) {
    menuContent.innerHTML = html;
    menu.classList.remove('hidden');
}

function closeMenu() {
    menu.classList.add('hidden');
    menuContent.innerHTML = '';
}

closeMenuButton.addEventListener('click', closeMenu);