# -*- coding: utf-8 -*-
__author__ = 'Se7en'
class Solution:
    # @return a tuple, (index1, index2)
    def twoSum(self, num, target):
        num_dict = {}
        for i in range(len(num)):
            if num_dict.get(target-num[i], None) == None:
                num_dict[num[i]] = i
            else:
                return (num_dict[target-num[i]]+1, i+1)