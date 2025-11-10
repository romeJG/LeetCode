/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    const backtrack = (curr, open, close) => {
        // If the string is complete
        if (curr.length === n * 2) {
            result.push(curr);
            return;
        }

        // Add "(" if we still have opens left
        if (open < n) {
            backtrack(curr + "(", open + 1, close);
        }

        // Add ")" if we have more opens than closes
        if (close < open) {
            backtrack(curr + ")", open, close + 1);
        }
    };

    backtrack("", 0, 0);
    return result;
};
