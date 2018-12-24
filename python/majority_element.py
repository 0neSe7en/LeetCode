# -*- coding: utf-8 -*-
__author__ = 'Se7en'


class Solution:

    def __init__(self):
        self.current = [0, 0]
        self.n = {}

    # @param num, a list of integers
    # @return an integer
    def majorityElement(self, num):
        for n in num:
            if self.n.get(n):
                self.n[n] += 1
            else:
                self.n[n] = 1
            if self.n[n] > self.current[1]:
                self.current[0], self.current[1] = n, self.n[n]
            print("n is ", self.n)
            print("current is ", self.current)
        if self.current[1] > (len(num) / 2):
            return self.current[0]

x = Solution()
x.majorityElement([1, 2, 2, 3, 4, 2])
