# -*- coding: utf-8 -*-
__author__ = 'Se7en'

class Solution:
    def isValid(self, s):
        p = []
        D = {')':'(', ']':'[', '}':'{'}
        for c in s:
            if c in D:
                if len(p) == 0:
                    return False
                if p.pop() != D[c]:
                    return False
            else:
                p.append(c)
        if len(p) == 0:
            return True
        else:
            return False
