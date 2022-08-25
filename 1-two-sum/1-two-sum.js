/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsLength = nums.length
    let valueMap = {}
    let ans = {}
    for(i=0; i<nums.length; i++) {
       if(valueMap[target-nums[i]]!=null || valueMap[target-nums[i]]!=undefined) {
           ans.first = valueMap[target-nums[i]]
           ans.second = i
       }
       valueMap[nums[i]] = i
    }
    return [ans.first, ans.second]
};