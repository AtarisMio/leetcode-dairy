/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums: number[], target: number): number[] => {
    let hashmap: { [key: number]: number } = {};
    for (let index = 0; index < nums.length; index++) {
        let n = nums[index];
        let test = target - n;
        if (hashmap.hasOwnProperty(test)) {
            return [hashmap[test], index];
        }
        hashmap[n] = index;
    }
    return [];
};