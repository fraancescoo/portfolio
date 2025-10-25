/**
 * @param {Array} socials 
 */
function loadSocials(socials) {
    const cards = document.querySelector('html body section#socials.page > div');

    socials.forEach(social => {
        const socialCard = document.createElement('div');
        socialCard.classList.add('card');

        const cardTitle = document.createElement('h4');
        cardTitle.innerText = social.name;
        socialCard.appendChild(cardTitle);

        const cardLabel = document.createElement('p');
        cardLabel.innerText = social.label;
        socialCard.appendChild(cardLabel);

        const cardButton = document.createElement('a');
        cardButton.href = social.url;
        cardButton.target = '_blank';
        cardButton.classList.add('button', 'button__primary');
        const cardButtonIcon = document.createElement('span');
        cardButtonIcon.classList.add('material-symbols-outlined');
        cardButtonIcon.innerText = 'link';
        cardButton.appendChild(cardButtonIcon);
        cardButton.innerHTML += ' Visita';
        socialCard.appendChild(cardButton);

        cards.appendChild(socialCard);
    });
}

fetch('/data/socials.json')
    .then(data => data.json())
    .then(data => loadSocials(data))
    .catch(err => console.error(err));