/**
 * Lang
 */

/**
 * Lang Selector
 */

const chooseLang = document.querySelector('[data-lang-choose]');

function openLangSelector() {
    chooseLang.classList.remove('hidden');
    document.body.setAttribute('blur', '');
}

function closeLangSelector() {
    chooseLang.classList.add('hidden');
    document.body.removeAttribute('blur');
}

const langMessages = {
    'it': {
        'select-language': 'Seleziona la tua lingua',

        'experience': 'Competenze',
        'projects': 'Progetti',
        'contact-me': 'Contattami',

        'presentation-1': 'Sono Francesco Piantone, ho',
        'presentation-2': 'anni e sono un ragazzo con una forte passione per il mondo dell\'informatica.',

        'java-experience': '6+ anni di esperienza',
        'fullstack-web-experience': '6 anni di esperienza',
        'minecraft-experience': '6+ anni di esperienza',
        'cpp-experience': '4 anni di esperienza',
        'ue-u-experience': '2 anni di esperienza',
        'sql-experience': '4 anni di esperienza',
        'lua-experience': '3 anni di esperienza',
        'python-experience': '4 anni di esperienza',
        'php-experience': '4 anni di esperienza',

        'support-me': 'Supportami',
        'no-internet': 'Nessuna connessione a internet.',
        
        'join-now': 'Entra ora',
        'more-infos': 'Più Info',

        'role': 'Ruolo',
        'role-developer': 'Sviluppatore',

        'bytedevs-description': 'Siamo un team di developer indipendenti di script per giochi come fivem e minecraft.',
        'elitehub-description': 'Siamo un team di organizzatori di eventi.',

        'communication': 'Comunicazione',
        'communication-1': 'Riesco a parlare e scrivere in italiano corretto.',
        'communication-2': 'Riesco ad ascoltare e interagire con gli altri.',
        'communication-3': 'Non sempre riesco a mostrare empatia e interpretare il linguaggio non verbale.',

        'critical-thinking': 'Pensiero Critico',
        'critical-thinking-1': 'Non ho timore dei cambiamenti e sono abile a trovare soluzioni ai problemi.',
        'critical-thinking-2': 'Sono abbastanza creativo e riesco ad essere innovativo, curioso e incline all\'imparare nuove cose.',

        'leadership-1': 'Sono in grado di lavorare in modo indipendente e coordinarmi con i miei colleghi.',
        'leadership-2': 'Sono in grado di risolvere i conflitti interpersonali e di aiutare i colleghi in difficoltà.',
        'leadership-3': 'Sono in grado di prendere decisioni anche in poco tempo.',

        'positive-attitude': 'Atteggiamento Positivo',
        'positive-attitude-1': 'Sono una persona educata e capace di collaborare.',
        'positive-attitude-2': 'Non sono sempre di buon umore ma riesco a tenerlo separato dal mio lavoro.',
        'positive-attitude-3': 'Sono molto paziente e in genere rispetto tutti.',

        'team-work-1': 'Posso collaborare con gli altri senza problemi.',
        'team-work-2': 'Posso accettare commenti e critiche.',
        'team-work-3': 'Posso interagire con i clienti e gestire situazioni difficili o stressanti.',

        'work-ethic': 'Etica del Lavoro',
        'work-ethic-1': 'Sono in grado di rispettare gli altri e le scadenze.',
        'work-ethic-2': 'Sono in grado di organizzarmi (anche se molte volte ho bisogno di almeno un giorno di anticipo).',
        'work-ethic-3': 'Sono in grado di gestire il mio tempo, sono affidabile e puntuale.',
    },
    'en': {
        'select-language': 'Select your language',

        'experience': 'Skills',
        'projects': 'Projects',
        'contact-me': 'Contact me',

        'presentation-1': 'I\'m Francesco Piantone, I\'m',
        'presentation-2': 'years old and I\'m a boy with a strong passion for the world of IT.',

        'java-experience': '6+ years of experience',
        'fullstack-web-experience': '6 years of experience',
        'minecraft-experience': '6+ years of experience',
        'cpp-experience': '4 years of experience',
        'ue-u-experience': '2 years of experience',
        'sql-experience': '4 years of experience',
        'lua-experience': '3 years of experience',
        'python-experience': '4 years of experience',
        'php-experience': '4 years of experience',

        'support-me': 'Support me',
        'no-internet': 'No internet connection.',
        
        'join-now': 'Join now',
        'more-infos': 'More Info',

        'role': 'Role',
        'role-developer': 'Developer',

        'bytedevs-description': 'We are a team of independent developers of scripts for games like fivem and minecraft.',
        'elitehub-description': 'We are a team of event organizers.',

        'communication': 'Communication',
        'communication-1': 'I can speak and write correct Italian.',
        'communication-2': 'I can listen and interact with others.',
        'communication-3': 'I can\'t always show empathy and interpret nonverbal language.',

        'critical-thinking': 'Critical Thinking',
        'critical-thinking-1': 'I am not afraid of change and I am good at finding solutions to problems.',
        'critical-thinking-2': 'I am quite creative and can be innovative, curious and inclined to learn new things.',

        'leadership-1': 'I am able to work independently and coordinate with my colleagues.',
        'leadership-2': 'I am able to resolve interpersonal conflicts and help colleagues in difficulty.',
        'leadership-3': 'I am able to make decisions even in a short time.',

        'positive-attitude': 'Positive Attitude',
        'positive-attitude-1': 'I am an educated and collaborative person.',
        'positive-attitude-2': 'I\'m not always in a good mood but I manage to keep it separate from my work.',
        'positive-attitude-3': 'I am very patient and generally respectful of everyone.',

        'team-work-1': 'I can collaborate with others without any problems.',
        'team-work-2': 'I can accept comments and criticisms.',
        'team-work-3': 'I can interact with customers and handle difficult or stressful situations.',

        'work-ethic': 'Work Ethics',
        'work-ethic-1': 'I am able to respect others and deadlines.',
        'work-ethic-2': 'I am able to organize myself (although many times I need at least a day in advance).',
        'work-ethic-3': 'I am able to manage my time, I am reliable and punctual.',
    },
    'de': {
        'select-language': 'Wählen Sie Ihre Sprache aus',

        'experience': 'Fähigkeiten',
        'projects': 'Projekte',
        'contact-me': 'Kontaktieren Sie mich',

        'presentation-1': 'Ich heiße Francesco Piantoni, bin',
        'presentation-2': 'Jahre alt und ein Junge mit einer großen Leidenschaft für die IT-Welt.',

        'java-experience': '6+ Jahre Erfahrung',
        'fullstack-web-experience': '6 Jahre Erfahrung',
        'minecraft-experience': '6+ Jahre Erfahrung',
        'cpp-experience': '4 Jahre Erfahrung',
        'ue-u-experience': '2 Jahre Erfahrung',
        'sql-experience': '4 Jahre Erfahrung',
        'lua-experience': '3 Jahre Erfahrung',
        'python-experience': '4 Jahre Erfahrung',
        'php-experience': '4 Jahre Erfahrung',

        'support-me': 'Unterstützen Sie mich',
        'no-internet': 'Keine Internetverbindung.',
        
        'join-now': 'Discord',
        'more-infos': 'Informationen',

        'role': 'die Partie',
        'role-developer': 'Entwickler',

        'bytedevs-description': 'Wir sind ein Team unabhängiger Entwickler von Skripten für Spiele wie FiveM und Minecraft.',
        'elitehub-description': 'Wir sind ein Team von Eventorganisatoren..',

        'communication': 'Kommunikation',
        'communication-1': 'Ich kann korrektes Italienisch sprechen und schreiben.',
        'communication-2': 'Ich kann anderen zuhören und mit ihnen interagieren.',
        'communication-3': 'Ich kann nicht immer Empathie zeigen und nonverbale Sprache interpretieren.',

        'critical-thinking': 'Kritisches Denken',
        'critical-thinking-1': 'Ich habe keine Angst vor Veränderungen und bin gut darin, Lösungen für Probleme zu finden.',
        'critical-thinking-2': 'Ich bin ziemlich kreativ und kann innovativ, neugierig und lernbegierig sein.',

        'leadership-1': 'I am able to work independently and coordinate with my colleagues.',
        'leadership-2': 'I am able to resolve interpersonal conflicts and help colleagues in difficulty.',
        'leadership-3': 'I am able to make decisions even in a short time.',

        'positive-attitude': 'Positive Attitude',
        'positive-attitude-1': 'I am an educated and collaborative person.',
        'positive-attitude-2': 'I\'m not always in a good mood but I manage to keep it separate from my work.',
        'positive-attitude-3': 'I am very patient and generally respectful of everyone.',

        'team-work-1': 'I can collaborate with others without any problems.',
        'team-work-2': 'I can accept comments and criticisms.',
        'team-work-3': 'I can interact with customers and handle difficult or stressful situations.',

        'work-ethic': 'Work Ethics',
        'work-ethic-1': 'I am able to respect others and deadlines.',
        'work-ethic-2': 'I am able to organize myself (although many times I need at least a day in advance).',
        'work-ethic-3': 'I am able to manage my time, I am reliable and punctual.',
    }
};

function updateLang(lang) {
    let currentLang = langMessages[lang];

    window.localStorage.setItem('lang', lang);

    document.querySelectorAll('lang').forEach(function(element) {
        if(element.hasAttribute('name')) {
            element.textContent = currentLang[element.getAttribute('name')];
        }
    });

    // <img src="assets/icons/flags/it.svg" alt="Italy"> IT
    let imgElem = document.getElementById('currentlang-flag');
    imgElem.src = `assets/icons/flags/${lang}.svg`;
    imgElem.alt = lang;
    document.querySelector('current-lang').textContent = lang.toUpperCase();
}

(function() {
    let lang = window.localStorage.getItem('lang');
    updateLang(lang ? lang : 'en');
})();

chooseLang.querySelector('i').addEventListener('click', closeLangSelector);

chooseLang.querySelector('ul').querySelectorAll('li').forEach(function(element) {
    element.addEventListener('click', function() {
        updateLang(element.hasAttribute('language') ? element.getAttribute('language') : 'it');
        closeLangSelector();
    });
});