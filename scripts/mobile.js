/**
 * Mobile
 */

let headerUlElement = document.querySelector('[data-header]').querySelector('ul');

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    document.body.setAttribute('mobileua', '');

function mobileUpdate() {
    if(window.innerWidth / window.innerHeight < 1.4) {
        document.body.setAttribute('mobile', '');
        headerUlElement.classList.add('hidden');
    }else {
        document.body.removeAttribute('mobile');
        headerUlElement.classList.remove('hidden');
    }
}
mobileUpdate();

window.addEventListener('resize', function() {
    mobileUpdate();
});