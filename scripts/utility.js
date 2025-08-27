/**
 * Utility Methods
 */

/**
 * @param {string} text 
 * @param {any[]} values 
 * @returns {string}
 */
function format(text, values) {
    return text.replaceAll(/{(\d+)}/g, (match, index) => (
        typeof values[index] !== 'undefined' ? values[index] : match
    ));
}

/**
 * @param {Date} from 
 * @param {Date} to 
 */
function getDiff(from, to = new Date()) {
    if(from > to)
        [from, to] = [to, from];

    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if(days < 0) {
        months--;
        days += new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    }

    if(months < 0) {
        years--;

        const MONTHS_IN_A_YEAR = 12;
        months += MONTHS_IN_A_YEAR;
    }

    let res = [];

    /**
     * @param {number} num
     * @param {string} name
     * @returns {string}
     */
    function toString(num, name) {
        return `${num} ${name}${num !== 1 ? 's' : ''}`;
    }

    if(years > 0)
        res.push(toString(years, 'year'));

    if(months > 0)
        res.push(toString(months, 'month'));

    if(days > 0)
        res.push(toString(days, 'day'));

    return (
        res.length > 0
            ? `${res.join(', ').replace(/,([^,]*)$/, ' and$1')} ago`
            : 'now'
    );
}

/**
 * @param {any} object 
 * @returns {any[]} 
 */
function objectToArray(object) {
    return Object.keys(object).map(key => object[key]);
}