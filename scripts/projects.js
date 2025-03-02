/**
 * Projects
 */

document.getElementsByClassName('page7').item(0).querySelector('ul').querySelectorAll('div.projectcard').forEach(function(project) {
    let proj = project.getAttribute('project');

    project.querySelector('a.secondarybtn').addEventListener('click', function() {
        switch(proj) {
            case 'byteforum':
                openDialog('ByteForum', 'Cerchi un posto in cui comunicare con altri sviluppatori/videogiocatori o altri?<br>Sei nel posto giusto.<br><br>Su ByteForum puoi comunicare gratui');
                break;
            case 'bytedevs':
                openDialog('ByteDevs', '');
                break;
            case 'xssshield':
                openDialog('XSSShield', 'XSSShield è un servizio di protezione da exploit XSS.<br>');
                break;
        }
    });

    if(proj === 'xssshield') {
    }
});