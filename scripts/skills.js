/**
 * Skills
 */

const SKILLS_ADVANCED = 2;
const SKILLS_INTERMEDIATE = 1;
const SKILLS_BASIC = 0;

function skillsLevelToStr(level) {
    switch(level) {
        case SKILLS_ADVANCED:
            return 'Advanced';
        case SKILLS_INTERMEDIATE:
            return 'Intermediate';
        case SKILLS_BASIC:
            return 'Basic';
        default:
            return 'Unknown';
    }
}

let skills = [
    {
        name: 'Java',
        level: SKILLS_ADVANCED
    },
    {
        name: 'Javascript',
        level: SKILLS_ADVANCED
    },
    {
        name: 'HTML',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'CSS',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'Maven',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'Node.js',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'SQL',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'C++',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'Python',
        level: SKILLS_INTERMEDIATE
    },
    {
        name: 'Gradle',
        level: SKILLS_BASIC
    },
    {
        name: 'Kotlin',
        level: SKILLS_BASIC
    }
];

// skills.sort((a,b) => b.level-a.level);

let showSkillsButton;
const skillsContainer = (function(){
    let res = document.querySelector('#skillspage');
    if(!res)
        throw new Error('Invalid skills page element.');
    showSkillsButton = res.querySelector('.btn');
    res = res.querySelector('.container');
    if(!res)
        throw new Error('Invalid skills page container element.');
    return res;
})();

const numSkills = 8;

function isSkillsContainerExpanded() {
    return skillsContainer.getAttribute('expanded') === 'true';
}

function getSkills() {
    return isSkillsContainerExpanded() || skills.length < numSkills ? skills : skills.slice(0, numSkills)
}

async function loadSkills() {
    const sk = getSkills();

    if(skillsContainer.children.length > 0)
        skillsContainer.innerHTML = '';
    
    for(let i in sk) {
        let skill = sk[i];
    
        let div = document.createElement('div');
        div.classList.add('skillcard');

        let h1 = document.createElement('h1');
        h1.innerHTML = skill.name;

        let p = document.createElement('p');
        p.innerHTML = skillsLevelToStr(skill.level);

        div.appendChild(h1);
        div.appendChild(p);

        skillsContainer.appendChild(div);
    }

    showSkillsButton.innerHTML = isSkillsContainerExpanded() ? '<i class="fa-solid fa-caret-up"></i> Show Less' : '<i class="fa-solid fa-caret-down"></i> Show More';
}

function toggleSkills() {
    skillsContainer.setAttribute('expanded', !(skillsContainer.hasAttribute('expanded') ? /^true$/i.test(skillsContainer.getAttribute('expanded')).valueOf() : true));
    loadSkills();
}

showSkillsButton.addEventListener('click', toggleSkills);
loadSkills();