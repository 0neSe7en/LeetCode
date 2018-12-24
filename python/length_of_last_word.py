class Solution:
    # @param s, a string
    # @return an integer
    def lengthOfLastWord(self, s):
        import re
        match = re.match(r"\w*", s[::-1])
        if match:
            return len(match.group(0))
        else:
            return 0

x = Solution()
print x.lengthOfLastWord("   a b  ")