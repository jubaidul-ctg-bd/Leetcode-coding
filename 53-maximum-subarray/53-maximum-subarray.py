class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        subSum = nums[0]
        size = len(nums)
        value = nums[0]
        for i in range(1, size):
            subSum = max(subSum+nums[i], nums[i])
            value = max(value, subSum)    
        return value
        