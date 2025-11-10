/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let stringResult = "";
    let jump = (numRows - 1) * 2;

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += jump) {
            stringResult += s[j];


            if (i > 0 && i < numRows - 1 && (j + jump - 2 * i) < s.length) {
                stringResult += s[j + jump - 2 * i];
            }
        }
    }
    return stringResult;
};
