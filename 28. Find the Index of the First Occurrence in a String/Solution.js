/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack === needle) return 0;

    let n = haystack.length;
    let m = needle.length;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        for (j = 0; j < m; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }

        if (j === m) {
            return i;
        }
    }
    return -1;
};