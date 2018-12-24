# -*- coding: utf-8 -*-
__author__ = 'Se7en'
class Solution:
    def reverse(self, x):
        if x==0 or x>=1534236469 or x<=-1563847412:
            return 0
        x = str(x)
        if x[0] == '-':
            x = x[1:]
            return int("-"+''.join(x[::-1]).lstrip('0'))
        return int(''.join(x[::-1]).lstrip('0'))

x = Solution()
print(x.reverse(-123))
print(x.reverse(1534236469))
print(x.reverse(-0))