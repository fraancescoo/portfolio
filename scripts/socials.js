/**
 * Social Card Init
 */

let socialcards = document.getElementsByClassName('socialcard');
for(let i = 0; i < socialcards.length; i++) {
    let card = socialcards.item(i);
    if(card.hasAttribute('link')) {
        card.addEventListener('click', function() {
            window.open(card.getAttribute('link'), '_blank');
        });
    }
}