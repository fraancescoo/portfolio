/**
 * Certificates
 */

document.querySelector('.certificatespage').querySelector('.container').querySelectorAll('.certificatescard').forEach(function(element) {
    const certissuer = element.getAttribute('certissuer');
    const certid = element.getAttribute('certid');
    const certname = element.getAttribute('certname');
    const url = `https://www.hackerrank.com/certificates/${certid}`;

    element.querySelector('i.fa-up-right-from-square').addEventListener('click', () => { window.open(certissuer === 'hackerrank' ? url : '', '_blank'); });

    element.querySelector('i.fa-eye').addEventListener('click', () => {
        openMenu(`<iframe src="/assets/files/${certname}_certificate_${certissuer}.pdf" style="width: 100%; height: 100%; position: absolute; border-radius: 5em; border-width: 0;"></iframe>`);
    });

    element.querySelector('i.fa-file-arrow-down').addEventListener('click', () => {
        let elem = document.createElement('a');
        elem.download = `${certname}_certificate_${certissuer}.pdf`;
        elem.href = `/assets/files/${certname}_certificate_${certissuer}.pdf`;
        elem.click();
        elem.remove();
    });

    let certissuericon = element.querySelector('i.fa-brands');
    certissuericon.classList.add(`fa-${certissuer}`);

    let star = element.querySelector('.fa-star');
    if(star) {
        let span = document.createElement('span');
        span.classList.add('popuptext');
        span.innerHTML = `Highest ${certname.charAt(0).toUpperCase()}${certname.substring(1)} certificate on ${certissuer.charAt(0).toUpperCase()}${certissuer.substring(1)}`;
        element.querySelector('.bottombuttons').appendChild(span);
    }
});