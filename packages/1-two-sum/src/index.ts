/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const twoSum = (nums: number[], target: number): number[] => {
  const hashmap: { [key: number]: number } = {};
  for (let index = 0; index < nums.length; index += 1) {
    const n = nums[index];
    const test = target - n;
    if (test in hashmap) {
      return [hashmap[test], index];
    }
    hashmap[n] = index;
  }
  return [];
};
