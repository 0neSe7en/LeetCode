/*
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (39.17%)
 * Total Accepted:    277.8K
 * Total Submissions: 684.5K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */

function calc(height, i, j) {
  return Math.min(height[i], height[j]) * (j - i);
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let currentMax = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const r = calc(height, i, j);
      if (currentMax < r) {
        currentMax = r;
      }
    }
  }
  return currentMax
};

require('./localTest')(maxArea, [
  {expect: 49, args: [[1,8,6,2,5,4,8,3,7]]},
  {expect: 1, args: [[1,100]]},
  {expect: 2, args: [[1, 100, 1]]}
])