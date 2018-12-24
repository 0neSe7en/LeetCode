/*
 * [804] Rotated Digits
 *
 * https://leetcode.com/problems/rotated-digits/description/
 *
 * algorithms
 * Easy (50.88%)
 * Total Accepted:    16.3K
 * Total Submissions: 31.9K
 * Testcase Example:  '10'
 *
 * X is a good number if after rotating each digit individually by 180 degrees,
 * we get a valid number that is different from X.  Each digit must be rotated
 * - we cannot choose to leave it alone.
 * 
 * A number is valid if each digit remains a digit after rotation. 0, 1, and 8
 * rotate to themselves; 2 and 5 rotate to each other; 6 and 9 rotate to each
 * other, and the rest of the numbers do not rotate to any other number and
 * become invalid.
 * 
 * Now given a positive number N, how many numbers X from 1 to N are good?
 * 
 * 
 * Example:
 * Input: 10
 * Output: 4
 * Explanation: 
 * There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
 * Note that 1 and 10 are not good numbers, since they remain unchanged after
 * rotating.
 * 
 * 
 * Note:
 * 
 * 
 * N  will be in range [1, 10000].
 * 
 * 
 */
const VALID = new Set(['2', '5', '6', '9']);
const INVALID = new Set(['3', '4', '7']);
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  let count = 0;
  for (let i = 1; i < N + 1; i++) {
    const digitString = i.toString();
    let isValid = false;

    for (let i = 0; i < digitString.length; i++) {
      const str = digitString[i];
      if (INVALID.has(str)) {
        isValid = false;
        break;
      }
      if (VALID.has(str)) {
        isValid = true;
      }
    }
    if (isValid) {
      count ++;
    }
  }
  return count;
};
