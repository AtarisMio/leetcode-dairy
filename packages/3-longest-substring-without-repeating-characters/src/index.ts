/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s: string): number {
    let start = 0;
    let length = 0;
    let maxLength = 0;
    const searched: { [key: string]: number } = {};
    for (let index = start; index < s.length; index++) {
        let testChar = s[index];
        if (searched[testChar] >= 0) {
            if (maxLength < length) {
                maxLength = length;
            }
            length = length - searched[testChar] + start;
            s.slice(start, searched[testChar]).split('').forEach(c => searched[c] = -1);
            start = searched[testChar] + 1;
            searched[testChar] = index;
            continue;
        }
        searched[testChar] = index;
        length++;
        if (maxLength < length) {
            maxLength = length;
        }
    }
    return maxLength;
};