/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans=0
    let left=0
    let obj={}
    for(let i=0; i<s.length; i++) {
        if(obj[s[i]] && left<=obj[s[i]]) left=obj[s[i]]
        obj[s[i]]=i+1
        ans=Math.max(1+i-left, ans)
    }
    ans=Math.max(s.length-left, ans)
    return ans
};