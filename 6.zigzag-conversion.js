/*
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (28.75%)
 * Total Accepted:    244.7K
 * Total Submissions: 849.1K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const res = [];
  if (numRows === 1) {
    return s;
  }
  for (let line = 0; line < numRows; line++) {
    let isdone = true;
    let n = 0;
    let isedge = line === 0 || line === numRows - 1;
    while (true) {
      const current = (numRows -1)*2*n;
      let target;
      if (isedge) {
        target = current + line;
      } else {
        target = isdone ? line + current : -line + current;
      }
      if (target >= s.length) {
        break;
      }
      if (isdone || isedge) {
        n++;
      }
      isdone = !isdone;
      res.push(s[target]);
    }
  }
  return res.join('');
};

require('./localTest')(convert, [
  {expect: 'PAHNAPLSIIGYIR', args: ['PAYPALISHIRING', 3]},
  {expect: 'PINALSIGYAHRPI', args: ['PAYPALISHIRING', 4]},
  {expect: 'agmbfhlnceikoqdjp', args: ['abcdefghijklmnopq', 4]},
  {expect: 'A', args: ['A', 1]}
])