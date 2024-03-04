class Solution:
    def bagOfTokensScore(self, tokens: List[int], power: int) -> int:
    
        tokens, ans, score = deque(sorted(tokens)), 0, 0
        
        while tokens:
            if tokens[0] <= power:
                power -= tokens.popleft()
                score += 1
                ans = max(ans, score)

            elif score > 0:
                power += tokens.pop()
                score -= 1
                
            else:
                return ans
            
        return ans