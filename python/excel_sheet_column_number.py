# -*- coding: utf-8 -*-
__author__ = 'Se7en'


class Solution:
    def titleToNumber(self, s):
        self.length = len(s)-1
        return sum(pow(26, self.length-i)*(ord(c)-64) for i, c in enumerate(s))

x = Solution()
print(x.titleToNumber("ABCDE"))
