/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (24.01%)
 * Total Accepted:    312.2K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const total = nums1.length + nums2.length;
    if (total % 2) {
      return findNth(Math.floor(total / 2) + 1, nums1, nums2);
    } else {
      const f1 = findNth(Math.floor(total / 2), nums1, nums2);
      const f2 = findNth(Math.floor(total / 2) + 1, nums1, nums2);
      // console.log('f1:', f1, 'f2:', f2);
      return (f1 + f2) / 2
    }
};

function findNth(k, arr1, arr2) {
  // console.log(k, arr1, arr2);
  if (arr1.length === 0) {
    return arr2[k - 1];
  }
  if (arr2.length === 0) {
    return arr1[k - 1];
  }
  if (k === 1) {
    return Math.min(arr1[0], arr2[0]);
  }
  const midk = Math.floor(k / 2);
  const midIndex = midk - 1;
  const arr1Key = arr1[midIndex];
  const arr2Key = arr2[midIndex];
  if (arr2Key === undefined || arr1Key < arr2Key) {
    return findNth(k - midk, arr1.slice(midk, arr1.length), arr2);
  } else {
    return findNth(k - midk, arr1, arr2.slice(midk, arr2.length));
  }
}
//
// require('./localTest')(findMedianSortedArrays, [
//   {expect: 2.5, args: [[1,2], [3,4]]},
//   {expect: 2, args: [[1,3], [2]]},
//   {expect: 7, args: [[1,2,7,8], [3,4,5,6,9,10,11,12,13]]},
//   {expect: 4.5, args: [[1,2,3,4], [5,6,7,8]]},
//   {expect: 4.5, args: [[5,6,7,8], [1,2,3,4]]},
//   {expect: 3.5, args:[[1], [2,3,4,5,6]]}
// ])
