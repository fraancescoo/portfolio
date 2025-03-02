/**
 * Animation
 */

const revealelements = document.querySelectorAll('[reveal-side]');
revealelements.forEach(async function(element) {
    let side = element.getAttribute((element.getAttribute('reveal-mobile')) && document.body.hasAttribute('mobile') ? 'reveal-mobile' : 'reveal-side');
    let duration = element.getAttribute('reveal-duration') || '0.5s';

    function check(callback) {
        let rect = element.getBoundingClientRect();

        if(
            rect.y > 0
            && rect.x > 0
        ) {
            element.style.animation = `reveal-${side}`;
            element.style.animationDuration = duration;
            
            if(callback) callback();
        }else {
            element.style.animation = '';
        }
    }

    check();
    if(!element.hasAttribute('reveal-only-on-load')) window.addEventListener('scroll', () => check(() => window.removeEventListener('scroll', check)));
});