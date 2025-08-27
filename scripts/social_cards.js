/**
 * Social Card
 */

class Social {
    /**
     * @type {string}
     */
    socialName;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    url;

    /**
     * @type {string}
     */
    image;
}

const socialCardTemplate = `
<img src="/assets/images/{3}propic.png" alt="">
<h1>{0}</h1>
<span>{1}</span>
`;

/**
 * @param {Social} social 
 * @returns {HTMLDivElement}
 */
function buildSocial(social) {
    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('socials__card')
        .html(format(socialCardTemplate, objectToArray(social)))
        .get(0);
}


$(document).ready(async function() {
    /**
     * @type {Social[]}
    */
    const socials = await $.get('/assets/files/socials.json');
    if(!socials.length)
        return $('section#socials').remove();

    const ul = $('section#socials ul');

    socials.forEach(social => {
        ul.append(
            $(document.createElement('li'))
                .append(buildSocial(social))
        );
    });
});