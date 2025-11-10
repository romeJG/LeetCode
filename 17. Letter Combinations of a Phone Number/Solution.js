/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return [];

    const mpp = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };

    const res = [];

    const solve = (temp, idx) => {
        if (idx === digits.length) {
            res.push(temp.join(""));
            return;
        }

        for (const ch of mpp[digits[idx]]) {
            temp.push(ch);
            solve(temp, idx + 1);
            temp.pop();
        }
    };

    solve([], 0);
    return res;
};