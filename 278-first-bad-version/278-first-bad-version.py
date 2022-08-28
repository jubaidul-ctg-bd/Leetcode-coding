# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        left = 1
        right = n
        while(left<right):
            tmp = int((left+right)/2)
            if(isBadVersion(tmp)): 
                right = tmp 
            else: left = tmp+1
        return right