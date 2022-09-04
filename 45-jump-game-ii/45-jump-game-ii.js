/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let obj={}
    let len = nums.length
    let ans=len-1
    obj[0] = 0
    for(let i=0; i<len; i++) {
        for(let j=i+1; j<len && j<=i+nums[i]; j++) {
            let tmp = Math.min(obj[j-1]+1, obj[i]+1)
            if(obj[j]) obj[j] = Math.min(obj[j], tmp) 
            else obj[j] = tmp
        }
    }
    return obj[len-1]
};