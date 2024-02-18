class Solution(object):
    
    def isPrefixAndSuffix(self,str1, str2):
        pre = False
        if str1 == str2[:len(str1)]:
            pre = True
        if str1 == str2[-len(str1):]:
            return pre and True
        return False
    
    def countPrefixSuffixPairs(self, words):
        """
        :type words: List[str]
        :rtype: int
        """
        accum = 0
        for str1 in range(0, len(words)):
            for str2 in range(str1 + 1, len(words)):
                if str1 != str2 and self.isPrefixAndSuffix(words[str1], words[str2]):
                    accum = accum + 1
        return accum