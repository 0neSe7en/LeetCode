# -*- coding: utf-8 -*-
__author__ = 'Se7en'


# class Solution:
# @param version1, a string
# @param version2, a string
# @return an integer

#     def compareVersion(self, version1, version2):
#         v1 = map(int, version1.split('.'))
#         v1 = [int(v) for v in version1.split('.')]
# v2 = map(int, version2.split('.'))
#         v2 = [int(v) for v in version2.split('.')]
#         if v1 < v2:
#             return -1
#         elif v1 > v2:
#             return 1
#         else:
#             return 0
# def compareVersion(self, version1, version2):
# for (v1, v2) in zip(version1.split('.'), version2.split('.')):
# if int(v1) < int(v2):
# return -1
# if int(v1) > int(v2):
# return 1
# if (len(version1.split('.'))<len(version2.split('.'))):
# return self.compare_other(version2.split('.')[len(version1.split('.')):], -1)
# elif (len(version1.split('.'))>len(version2.split('.'))):
# return self.compare_other(version1.split('.')[len(version2.split('.')):], 1)
# else:
# return 0

# def compare_other(self, version, value):
# for v in version:
# if int(v)!=0:
# return value
# return 0

# x = Solution()
# print(x.compareVersion("1.0.0", "1.0"))

x = []
for a in range(11):
    for b in range(11):
        for c in range(11):
            if a + b + c == 24 and a * a + b * b == c * c:
                x.append((a, b, c))
print x

x = [(a, b, c) for a in range(1, 11) for b in range(1, 11) for c in range(1, 11) if a+b+c==24 and a*a+b*b==c*c]
print x