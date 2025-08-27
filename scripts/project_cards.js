/**
 * Project Card
 */

class Project {
    /**
     * @type {string}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @type {string}
     */
    shortDescription;

    /**
     * @type {string}
     */
    description;

    /**
     * @type {string}
     */
    role;

    /**
     * @type {string}
     */
    url;
}

const projectCardTemplate = `
<h1>{1}</h1>
<span class="project__description">{2}</span>
<span class="project__role__wrapper">
    Role:
    <span class="project__role">{4}</span>
</span>
<a href="{5}" class="button button__primary"><img src="/assets/icons/breaking_news.svg" class="icon">More Info</a>
`;

/**
 * @param {Project} project 
 * @returns {HTMLDivElement}
 */
function buildProject(project) {
    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('projects__card')
        .html(format(projectCardTemplate, objectToArray(project)))
        .get(0);
}


$(document).ready(async function() {
    /**
     * @type {Project[]}
    */
    const projects = await $.get('/assets/files/projects.json');
    if(!projects.length)
        return $('section#projects').remove();

    const ul = $('section#projects ul');

    projects.forEach(project => {
        ul.append(
            $(document.createElement('li'))
                .append(buildProject(project))
        );
    });
});