/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const set = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let out = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = set[s[i]];

        if (curr < prev) {
            out -= curr;
        } else {
            out += curr;
        }

        prev = curr
        // console.log(curr)
    }
    return out;
};