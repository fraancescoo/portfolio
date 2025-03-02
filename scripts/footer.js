/**
 * Footer
 */

document.getElementsByClassName('footer-socials').item(0).querySelectorAll('i').forEach(function(elem) {
    elem.addEventListener('click', function() {
        window.open(elem.getAttribute('href'), '_blank');
    });
});