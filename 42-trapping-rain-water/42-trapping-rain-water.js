/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length 
    let left = 0
    let right = n-1
    let lm = height[left]
    let rm = height[right]
    let ans = 0 
    while(left<right) {
        lm = Math.max(lm, height[left])
        if(lm>height[left]) ans+=(lm-height[left])
        rm = Math.max(rm, height[right])
        if(rm>height[right]) ans+=(rm-height[right]) 
        height[left]<height[right]?left++:right--
    }
    return ans
};