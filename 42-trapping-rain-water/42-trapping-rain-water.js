/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length 
    let left = []
    let right = []
    let lm = 0
    let rm = 0
    let ans = 0
    for(let i=0; i<n; i++) {
        lm = Math.max(height[i], lm)
        left.push(lm)    
        rm = Math.max(height[n-i-1], rm)
        right.unshift(rm)    
    }
    for(let i=0; i<n; i++) {
        ans += Math.min(left[i], right[i])-height[i]
    }
    return ans
};