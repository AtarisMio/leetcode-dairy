/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    if (nums1.length === 0 || nums2.length === 0) {
        const oneNums = nums1.length === 0 ? nums2 : nums1;
        const length = oneNums.length;
        if (length % 2 === 1) {
            return oneNums[(length - 1) / 2];
        } else {
            return (oneNums[length / 2 - 1] + oneNums[length / 2]) / 2;
        }
    }
    if (nums1.length === nums2.length && nums1.length === 1) {
        return (nums1[0] + nums2[0]) / 2;
    }
    if (nums1[0] <= nums2[0]) {
        if (nums1[nums1.length - 1] >= nums2[nums2.length - 1]) {
            return findMedianSortedArrays(nums1.slice(1, nums1.length - 1), nums2);
        }
        return findMedianSortedArrays(nums1.slice(1), nums2.slice(0, nums2.length - 1));
    }
    if (nums1[nums1.length - 1] >= nums2[nums2.length - 1]) {
        return findMedianSortedArrays(nums1.slice(0, nums1.length - 1), nums2.slice(1));
    }
    return findMedianSortedArrays(nums1, nums2.slice(1, nums2.length - 1));
};