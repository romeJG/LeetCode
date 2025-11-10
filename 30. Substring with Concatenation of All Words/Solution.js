/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || words.length === 0) return [];

    const wordLen = words[0].length;
    const totalLen = wordLen * words.length;
    const result = [];

    // Step 1: build frequency map of words
    const wordCount = new Map();
    for (const w of words) {
        wordCount.set(w, (wordCount.get(w) || 0) + 1);
    }

    // Step 2: slide with different offsets (0 … wordLen-1)
    for (let i = 0; i < wordLen; i++) {
        let left = i, count = 0;
        const seen = new Map();

        for (let right = i; right + wordLen <= s.length; right += wordLen) {
            const word = s.slice(right, right + wordLen);

            if (wordCount.has(word)) {
                seen.set(word, (seen.get(word) || 0) + 1);
                count++;

                // If more than expected, shrink from left
                while (seen.get(word) > wordCount.get(word)) {
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }

                // If we matched all words
                if (count === words.length) {
                    result.push(left);
                    const leftWord = s.slice(left, left + wordLen);
                    seen.set(leftWord, seen.get(leftWord) - 1);
                    count--;
                    left += wordLen;
                }
            } else {
                // Reset when word not in dictionary
                seen.clear();
                count = 0;
                left = right + wordLen;
            }
        }
    }

    return result;
};
