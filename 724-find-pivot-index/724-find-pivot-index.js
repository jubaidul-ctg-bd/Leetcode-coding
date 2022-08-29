/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
   let sum = 0
   let left = 0
   let len = nums.length
   let ans = -1
   for(let i=0; i<len; i++) {
       sum+=nums[i]
   }
   for(let i=0; i<len; i++) {
       if(left==sum-nums[i]-left) {
           return ans = i
       }
       left+=nums[i]
   }
   return ans
};