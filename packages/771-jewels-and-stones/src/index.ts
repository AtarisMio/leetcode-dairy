/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const numJewelsInStones = function numJewelsInStones(
  J: string,
  S: string,
): number {
  return Array.prototype.filter.call(S, s => J.includes(s)).length;
};
