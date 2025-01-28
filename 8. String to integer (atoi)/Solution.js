/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    s = s.trim();
    if (s.length === 0) return 0;

    let index = 0;
    let sign = 1;
    let result = 0;

    if (s[index] === '-' || s[index] === '+') {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }

    result *= sign;

    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
};
