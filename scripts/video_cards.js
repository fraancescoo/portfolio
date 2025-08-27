/**
 * Video Card
 */

class Video {
    /**
     * @type {string}
     */
    title;

    /**
     * @type {string}
     */
    shortDescription;

    /**
     * @type {string}
     */
    thumbnail;

    /**
     * @type {string}
     */
    url;
}

const videoCardTemplate = `
<h1>{0}</h1>
<p>{1}</p>
<img src="/assets/images/{2}_thumbnail.png">
`;

/**
 * @param {Video} video 
 * @returns {HTMLDivElement}
 */
function buildVideo(video) {
    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('videos__card')
        .html(format(videoCardTemplate, objectToArray(video)))
        .on('click', () => location.href = video.url)
        .get(0);
}


$(document).ready(async function() {
    /**
     * @type {Video[]}
    */
    const videos = await $.get('/assets/files/videos.json');
    if(!videos.length)
        return $('section#videos').remove();

    const ul = $('section#videos ul');

    videos.forEach(video => {
        ul.append(
            $(document.createElement('li'))
                .append(buildVideo(video))
        );
    });
});