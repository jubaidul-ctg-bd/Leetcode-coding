class Solution:
    def search(self, nums: List[int], target: int) -> int:
        n = len(nums)
        left = 0
        right = n-1
        while(left<=right):
            if(nums[left]==target): return left
            elif(nums[right]==target): return right
            tmp = int((right+left)/2)
            if(nums[tmp]==target): return tmp
            if(nums[tmp]>target): right=tmp-1
            else: left=tmp+1
        return -1
            