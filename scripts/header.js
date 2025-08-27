/**
 * Header
 */

$(document).ready(function() {
    const hamburger = $('header nav a#hamburger');
    const navUl = $('header nav ul');

    hamburger.on('click', function(event) {
        event.preventDefault();

        if(!hamburger.is(':visible'))
            return;

        navUl.toggleClass('active');
    });
});