/**
 * Socials
 */

document.querySelectorAll('.socialcard').forEach(function(elem) {
    if(!elem.hasAttribute('url')) return;

    elem.addEventListener('click', function(){
        window.open(elem.getAttribute('url'), '_blank');
    });
});