class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        dic = {}
        a = len(nums1)
        b = len(nums2)
        ans = []
        for i in range(a):
            if(nums1[i] in dic):
                dic[nums1[i]]+=1
            else: dic[nums1[i]]=1
        for j in range(b):  
            if( (nums2[j] in dic) and dic[nums2[j]]>0):
                dic[nums2[j]]-=1
                ans.append(nums2[j])
        return ans
        