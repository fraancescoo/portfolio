/**
 * Certificate Card
 */

class Certificate {
    /**
     * @type {string}
     */
    name;

    /**
     * @type {'Basic'|'Intermediate'|'Advanced'}
     */
    type;

    /**
     * @type {string}
     */
    url;

    /**
     * @type {string}
     */
    iframeUrl;

    /**
     * @type {'HackerRank'}
     */
    issuer;

    /**
     * @type {string}
     */
    issuedAt;

    /**
     * @type {string}
     */
    id;

    /**
     * @type {boolean}
     */
    highest;
}

const certificateCardTemplate = `
<h1>{0}</h1>
<span>{1}</span>
`;

const certificateDialogTemplate = `
<font color="red">This part of the site is currently under construction.</font>
<span><span class="prefix">Name:</span> {0}</span>
<span><span class="prefix">Type:</span> {1}</span>
<span><span class="prefix">ID: </span> {6}</span>
<span><span class="prefix">URL:</span> <a href="{2}" target="_blank">{2}</a></span>
<span><span class="prefix">Issuer:</span> {4}</span>
<span><span class="prefix">Issued At:</span> {5}</span>
<span><span class="prefix">Highest:</span> {7}</span>
`;

/**
 * @param {Certificate} certificate
 * @returns {HTMLDivElement}
 */
function buildCertificate(certificate) {
    const array = objectToArray(certificate);

    return elem = $(document.createElement('div'))
        .addClass('card')
        .addClass('certificates__card')
        .html(format(certificateCardTemplate, array))
        .append(
            $(document.createElement('a'))
                .text('i')
                .click(function() {
                    $('section#certificates dialog')
                        .html(format(certificateDialogTemplate, array))
                        .get(0)
                        .showModal();
                })
        )
        .get(0);
}

$(document).ready(async function() {
    /**
     * @type {Certificate[]}
    */
    const certificates = await $.get('/assets/files/certificates.json');
    if(!certificates.length)
        return $('section#certificates').remove();

    const ul = $('section#certificates ul');

    certificates.forEach(cert => {
        ul.append(
            $(document.createElement('li'))
                .append(buildCertificate(cert))
        );
    });
});