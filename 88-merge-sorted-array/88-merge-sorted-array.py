class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        a = nums1[0:m]
        b = nums2[0:n]
        c = a+b
        c.sort()
        lenn = len(c)
        for i in range(lenn):
            nums1[i] = c[i]
        return nums1
        """
        Do not return anything, modify nums1 in-place instead.
        """
        