/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    let len=nums.length
    let right=len
    while(0<right) {
        for(let i=0; i<right-1; i++) {
            nums[i]=(nums[i]+nums[i+1])%10
        }
        right-=1
    }
    return nums[0]
    
};