/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
    const n = s.length;
    const result = [];

    const isValid = (segment) => {
        if (segment.length === 0 || segment.length > 3) {
            return false;
        }

        if (segment.length > 1 && segment[0] === '0') {
            return false;
        }

        const num = parseInt(segment, 10);
        return num >= 0 && num <= 255;
    };

    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                const seg1 = s.substring(0, i);
                const seg2 = s.substring(i, j);
                const seg3 = s.substring(j, k);
                const seg4 = s.substring(k, n);

                if (isValid(seg1) &&
                    isValid(seg2) &&
                    isValid(seg3) &&
                    isValid(seg4)) {
                    result.push(`${seg1}.${seg2}.${seg3}.${seg4}`);
                }
            }
        }
    }

    return result;
};