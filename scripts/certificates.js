/**
 * @param {Array} certificates 
 */
function loadCertificates(certificates) {
    const cards = document.querySelector('html body section#certificates.page > div');

    certificates.forEach(certificate => {
        const certificateCard = document.createElement('div');
        certificateCard.classList.add('card');

        const cardTitle = document.createElement('h4');
        cardTitle.classList.add('card__title');
        cardTitle.innerHTML = certificate.name;
        certificateCard.appendChild(cardTitle);

        const cardLevel = document.createElement('p');
        cardLevel.innerText = `${certificate.level} Level${certificate.highest ? ' (Highest)' : ''}`;
        certificateCard.appendChild(cardLevel);

        const cardIssuer = document.createElement('p');
        cardIssuer.innerText = `Issued by ${certificate.issuer}`;
        certificateCard.appendChild(cardIssuer);

        const cardButton = document.createElement('a');
        cardButton.href = certificate.url;
        cardButton.target = '_blank';
        cardButton.classList.add('button', 'button__primary');
        const cardButtonIcon = document.createElement('span');
        cardButtonIcon.classList.add('material-symbols-outlined');
        cardButtonIcon.innerHTML = 'link';
        cardButton.appendChild(cardButtonIcon);
        cardButton.innerHTML += 'Vedi';
        certificateCard.appendChild(cardButton);

        cards.appendChild(certificateCard);
    });
}

fetch('/data/certificates.json')
    .then(data => data.json())
    .then(data => loadCertificates(data))
    .catch(err => console.error(err));