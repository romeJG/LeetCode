function longestPalindrome(s) {
    if (s.length < 2) return s; // If the string is empty or has one character, return it

    let start = 0; // Starting index of the longest palindrome
    let maxLength = 1; // Length of the longest palindrome

    // Helper function to expand around the center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--; // Expand to the left
            right++; // Expand to the right
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i); // Odd-length palindromes
        expandAroundCenter(i, i + 1); // Even-length palindromes
    }

    return s.substring(start, start + maxLength);
}

// Test cases
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"