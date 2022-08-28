class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        diff = 1000000
        value = 0 
        left = 0
        numsLen = len(nums)
        right = len(nums)-1
        nums.sort()
        for i in range(numsLen-2):
            left = i+1
            right = numsLen-1
            while left<right:
                summ = nums[i]+nums[left]+nums[right]
                if summ==target: 
                    return summ
                if summ<target: 
                    left+=1
                else: 
                    right-=1
                if diff > abs(summ-target):
                        value = summ
                        diff = abs(summ-target)
        return value
        