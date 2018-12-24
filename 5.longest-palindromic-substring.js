/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.60%)
 * Total Accepted:    385.1K
 * Total Submissions: 1.5M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const maxIndex = s.length * 2 + 1;
  let currentMax = 0;
  let start = 0;
  for (let mid = 1; mid < maxIndex; mid++) {
    if (maxIndex - mid - 1 < currentMax) {
      break;
    }
    let distance = 0;
    let left = mid - distance;
    let right = mid + distance;
    while (left >= 0 && right < maxIndex) {
      if (left % 2 === 0) {
        distance ++;
        left = mid - distance;
        right = mid + distance;
        continue;
      }
      const leftchar = index(s, left);
      const rightchar = index(s, right);
      if (leftchar === rightchar) {
        const max =  (right - 1) / 2 + 1 - (left - 1)/2;
        if (left % 2 && currentMax < max) {
          currentMax = max;
          start = (left - 1)/2
        }
        distance ++;
        left = mid - distance;
        right = mid + distance;
      } else {
        break;
      }
    }
  }
  return s.substr(start, currentMax);
};

function index(s, pos) {
  if (pos % 2) {
    return s[(pos - 1)/2]
  }
  return true;
}

const _ = require('underscore');

require('./localTest')(longestPalindrome, [
  {expect: 'bab', args: ['babad']},
  {expect: '', args: ['']},
  {expect: 'bb', args: ['cbbd']},
  {expect: 'aaaaa', args: ['aaaaa']},
  {expect: 'aaabaaa', args: ['aaabaaa']},
  {expect: 'yvvy', args:['yvvya']},
  {expect: 'a'.repeat(1000), args: ['a'.repeat(1000)]},
  {expect: 'yvvy', args: ['esbtzjaaijqkgmtaajpsdfiqtvxsgfvijpxrvxgfumsuprzlyvhclgkhccmcnquukivlpnjlfteljvykbddtrpmxzcrdqinsnlsteonhcegtkoszzonkwjevlasgjlcquzuhdmmkhfniozhuphcfkeobturbuoefhmtgcvhlsezvkpgfebbdbhiuwdcftenihseorykdguoqotqyscwymtjejpdzqepjkadtftzwebxwyuqwyeegwxhroaaymusddwnjkvsvrwwsmolmidoybsotaqufhepinkkxicvzrgbgsarmizugbvtzfxghkhthzpuetufqvigmyhmlsgfaaqmmlblxbqxpluhaawqkdluwfirfngbhdkjjyfsxglsnakskcbsyafqpwmwmoxjwlhjduayqyzmpkmrjhbqyhongfdxmuwaqgjkcpatgbrqdllbzodnrifvhcfvgbixbwywanivsdjnbrgskyifgvksadvgzzzuogzcukskjxbohofdimkmyqypyuexypwnjlrfpbtkqyngvxjcwvngmilgwbpcsseoywetatfjijsbcekaixvqreelnlmdonknmxerjjhvmqiztsgjkijjtcyetuygqgsikxctvpxrqtuhxreidhwcklkkjayvqdzqqapgdqaapefzjfngdvjsiiivnkfimqkkucltgavwlakcfyhnpgmqxgfyjziliyqhugphhjtlllgtlcsibfdktzhcfuallqlonbsgyyvvyarvaxmchtyrtkgekkmhejwvsuumhcfcyncgeqtltfmhtlsfswaqpmwpjwgvksvazhwyrzwhyjjdbphhjcmurdcgtbvpkhbkpirhysrpcrntetacyfvgjivhaxgpqhbjahruuejdmaghoaquhiafjqaionbrjbjksxaezosxqmncejjptcksnoq']},
])

