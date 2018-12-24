# -*- coding: utf-8 -*-
__author__ = 'Se7en'

# TODO
class MinStack:
    def __init__(self):
        self.l = [0]
        self.pos = 0
        self.min = [[0,0]]

    # @param x, an integer
    # @return an integer
    def push(self, x):
        self.l.append(x)
        if self.pos==0 or self.min[-1][1] > x:
            self.pos += 1
            self.min.append([self.pos, x])
        else: self.pos += 1
        return x

    # @return nothing
    def pop(self):
        self.pos -= 1
        if self.min[-1][0] > self.pos:
            self.min.pop()
        self.l.pop()
        # return x

    # @return an integer
    def top(self):
        return self.l[-1]

    # @return an integer
    def getMin(self):
        return self.min[-1][1]
