/**
 * Dialog
 */

const dialog = document.querySelector('[data-dialog-box]');
const closebutton = dialog.querySelector('[dialog-close-button]');
const dialogcontainer = dialog.querySelector('div.container');

/**
 * @param {string} title 
 * @param {NodeList} elements 
 */
function openDialog(title, elements) {
    let titleelement = document.createElement('h1');
    titleelement.textContent = title;
    dialogcontainer.appendChild(titleelement);

    if(typeof elements === 'string' || elements instanceof String) {
        let aelem = document.createElement('a');
        aelem.innerHTML = elements;
        dialogcontainer.appendChild(aelem);
    }else {
        elements.forEach(dialogcontainer.appendChild);
    }

    document.body.setAttribute('blur', '');
    dialog.classList.add('active');
}

function hideDialog() {
    dialog.classList.remove('active');
    document.body.removeAttribute('blur');
    dialogcontainer.childNodes.forEach(c => c.remove());
}

closebutton.addEventListener('click', hideDialog);