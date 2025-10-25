/**
 * @param {Array} skills 
 */
function loadSkills(skills) {
    const cards = document.querySelector('html body section#skills.page > div');

    skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.classList.add('card');

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card__title');
        cardTitle.innerHTML = skill.name;
        skillCard.appendChild(cardTitle);

        const cardLevel = document.createElement('p');
        cardLevel.innerHTML = `${skill.level} Knowledge`;
        skillCard.appendChild(cardLevel);

        const cardButton = document.createElement('a');
        cardButton.classList.add('button', 'button__primary');
        const cardButtonSymbol = document.createElement('span');
        cardButtonSymbol.classList.add('material-symbols-outlined');
        cardButtonSymbol.innerText = 'link';
        cardButton.appendChild(cardButtonSymbol);
        cardButton.innerHTML += ' Vedi';
        skillCard.appendChild(cardButton);

        cards.appendChild(skillCard);
    });
}

fetch('/data/skills.json')
    .then(data => data.json())
    .then(data => loadSkills(data))
    .catch(err => console.error(err));