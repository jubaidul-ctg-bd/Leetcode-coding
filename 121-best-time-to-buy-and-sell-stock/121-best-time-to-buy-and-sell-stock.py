class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        arr = []
        a = len(prices)
        ans = 0
        minn = prices[0]
        for i in range(a):
            ans = max(ans, prices[i]-minn)
            minn = min(minn, prices[i])
        return ans
            
            
