/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length
    let last = len-1;
    for(let i=0; i<nums.length; i++) {
        console.log(nums)
        
        if(nums[i]==val) {
            while(nums[last]==val  && last>i) {
                       nums.pop()
                       last--
                   }
            
             nums[i]=nums[last]
                nums.pop()
             last--
        }
    }
    return nums.length
    
};