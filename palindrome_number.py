class Solution:
    # @return a boolean

    def isPalindrome(self, x):
        s = str(x)
        if len(s) % 2 == 0:
            start = len(s) / 2
            end = start - 1
        else:
            start = len(s) / 2 + 1
            end = start - 2
        print "start is %d, end is %d" % (start, end)
        for t in zip(s[:start], s[:end:-1]):
            print t
            if t[0] != t[1]:
                return False
        return True

x = Solution()
print x.isPalindrome(5)
