from collections import Counter

class Solution:        
    def lastNonEmptyString(self, s):
        counter = Counter(s)
        maximum = max(counter.values())
        res = []

        for char in s:
            if(counter[char] == maximum):
                if(char not in res):
                    res.append(char)
                else:
                    res.append(char) # Agrega el final
                    res.remove(char) # Como lo agregamos al final lo quiramos del inicio
        return "".join(res)