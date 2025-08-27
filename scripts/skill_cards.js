/**
 * Skill Card
 */

class Skill {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {'Basic'|'Intermediate'|'Advanced'}
     */
    type;
}

const skillCardTemplate = `
<h1>{0}</h1>
<span>{1}</span>
`;

/**
 * @param {Skill} skill 
 * @returns {HTMLDivElement}
 */
function buildSkill(skill) {
    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('skills__card')
        .html(format(skillCardTemplate, objectToArray(skill)))
        .get(0);
}


$(document).ready(async function() {
    /**
     * @type {Skill[]}
    */
    const skills = await $.get('/assets/files/skills.json');
    if(!skills.length)
        return $('section#skills').remove();

    const ul = $('section#skills ul');

    skills.forEach(skill => {
        ul.append(
            $(document.createElement('li'))
                .append(buildSkill(skill))
        );
    });
});