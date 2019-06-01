/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = (nums: number[], target: number): number[] => {
    let index = 0;
    let answer = -1;
    for (; index < nums.length; index++) {
        answer = nums.slice(index).indexOf(target - nums[index]);
        if (answer !== -1) {
            break;
        }
    }
    return [index, answer];
};