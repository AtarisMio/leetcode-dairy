/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums: number[], target: number): number[] => {
    let index = 0;
    let answer = -1;
    for (; index <= nums.length; index++) {
        answer = nums.indexOf(target - nums[index], index + 1);
        if (answer !== -1) {
            break;
        }
    }
    return [index, answer];
};