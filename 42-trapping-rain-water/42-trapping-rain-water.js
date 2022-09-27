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
        rm = Math.max(height[n-i-1], rm)
        right.push(rm)    
    }
    for(let i=0; i<n; i++) {
        lm = Math.max(height[i], lm)
        ans += Math.min(lm, right[n-i-1])-height[i]
    }
    return ans
};