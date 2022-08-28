class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        nums.sort()
        size = len(nums)
        for i in range(size-1):
            if nums[i]==nums[i+1]:
                return 1
        return 0