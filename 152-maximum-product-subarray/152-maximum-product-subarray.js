/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let mCount=0
    let sum=nums[0]
    let currentMin=1
    let len=nums.length 
    let currentMax=1
    for(let i=0; i<len; i++) {
        let tmp = currentMax*nums[i]
        currentMax = Math.max(tmp, Math.max(nums[i], currentMin*nums[i]))
        currentMin = Math.min(tmp, Math.min(nums[i], currentMin*nums[i]))
        sum = Math.max(sum, currentMax)  
    }
    return sum
};
