/**
 * @param {Array} projects 
 */
function loadProjects(projects) {
    const cards = document.querySelector('html body section#projects.page > div');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card__title');
        cardTitle.innerText = project.name;
        projectCard.appendChild(cardTitle);

        const cardDescription = document.createElement('p');
        cardDescription.innerText = project.description;
        projectCard.appendChild(cardDescription);

        const cardButton = document.createElement('a');
        cardButton.href = project.url;
        cardButton.target = '_blank';
        cardButton.classList.add('button', 'button__primary');
        const cardButtonIcon = document.createElement('span');
        cardButtonIcon.classList.add('material-symbols-outlined');
        cardButtonIcon.innerText = project.url_icon;
        cardButton.appendChild(cardButtonIcon);
        cardButton.innerHTML += ` ${project.url_label}`;
        projectCard.appendChild(cardButton);

        cards.appendChild(projectCard);
    });
}

fetch('/data/projects.json')
    .then(data => data.json())
    .then(data => loadProjects(data))
    .catch(err => console.error(err));