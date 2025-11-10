/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    if (divisor === 0) return 0;
    let out = parseInt(dividend / divisor);
    if (out > 2147483647) return out - 1;
    return out;
};