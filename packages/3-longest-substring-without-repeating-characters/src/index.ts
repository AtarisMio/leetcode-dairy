/**
 * @param {string} s
 * @return {number}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars, func-names
const lengthOfLongestSubstring = function(s: string): number {
  const sLength = s.length;
  if (sLength <= 1) return sLength;
  let length = 0;
  const hashmap: Record<string, number> = {};
  for (let i = 0, j = 0; j < sLength; j += 1) {
    i = Math.max(hashmap[s[j]] || 0, i);
    length = Math.max(length, j - i + 1);
    hashmap[s[j]] = j + 1;
  }
  return length;
};
