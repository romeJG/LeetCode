/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let seen = new Set();
    let maxLength = 0;
    let left = 0;

    s.split("").map((char, right) => {
        while (seen.has(char)) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(char);
        maxLength = Math.max(maxLength, right - left + 1);
    });

    return maxLength;
};