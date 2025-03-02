/**
 * Age Calculator
 */

document.getElementById('age').innerHTML = function() {
    const birthDate = new Date('2009-04-30T00:00:00');
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    return (today.getMonth() > birthDate.getMonth() || (birthDate.getMonth() === today.getMonth() && today.getDate() >= birthDate.getMonth())) ? years : years - 1;
}();