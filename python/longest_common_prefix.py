class Solution:
    # @return a string

    def longestCommonPrefix(self, strs):
        ans = ""
        if not strs:
            return ""
        for chars in zip(*strs):
            if len(set(chars))==1:
                ans += chars[0]
            else:
                return ans
        return ans

x = Solution()
print x.longestCommonPrefix(['str12312312', 'strasdf', 'strjjjjj'])
print x.longestCommonPrefix([])
