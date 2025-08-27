/**
 * Static Content Loader
 */

$(function() {
    /* Global CSS */
    $('head').append(
        $(document.createElement('link'))
            .attr({
                rel: 'stylesheet',
                href: '/styles/global.css'
            })
    );
    
    /* Third-Party Libraries */
    // $('head').append(
    //     $(document.createElement('script'))
    //         .attr({
    //             src: 'https://kit.fontawesome.com/fa8876e775.js',
    //             crossorigin: 'anonymous'
    //         })
    // );

    /* Utility */
    $('head').append(
        $(document.createElement('script'))
            .attr({
                src: '/scripts/utility.js'
            })
    );

    /* Header */
    $('header').load('/components/header.html');
    $('head').append(
        $(document.createElement('script'))
            .attr({
                src: '/scripts/header.js'
            })
    );
});