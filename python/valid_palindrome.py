class Solution:
    # @param s, a string
    # @return a boolean

    def isPalindrome(self, s):
        alphanumeric = "1234567890abcdefghijklmnopqrstuvwxyz"
        test_str = filter(lambda c: c in alphanumeric, s.lower())
        if len(test_str) % 2 == 0:
            start = len(test_str) / 2
            end = start - 1
        else:
            start = len(test_str) / 2 + 1
            end = start - 2
        for t in zip(test_str[:start], test_str[:end:-1]):
            if t[0] != t[1]:
                return False
        return True

x = Solution()
print x.isPalindrome("A man, a plan, a canal: Panama")
