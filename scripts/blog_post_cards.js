/**
 * Blog Post Card
 */

const blogPostCardTemplate = `
<h1>{0}</h1>
<span>{1}</span>
<p>{2}</p>
<a href="{3}" class="button button__primary"><img src="/assets/icons/visibility.svg" class="icon">View Post</a>
`;

/**
 * @param {BlogPost} post 
 * @returns {HTMLDivElement}
 */
function buildPost(post) {
    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('blog__card')
        .html(format(blogPostCardTemplate, objectToArray(post)))
        .get(0);
}


$(document).ready(async function() {
    /**
     * @type {BlogPost[]}
    */
    const posts = await $.get('/assets/files/blog_posts.json');
    if(!posts.length)
        return $('section#blog_posts').remove();

    const ul = $('section#blog_posts ul');

    posts.forEach(post => {
        ul.append(
            $(document.createElement('li'))
                .append(buildPost(post))
        );
    });
});