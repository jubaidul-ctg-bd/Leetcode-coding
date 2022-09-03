/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let cnt=0
    let obj={} 
    for(let i=0; i<s.length; i++) {
        if(obj[s[i]]) obj[s[i]]+=1
        else obj[s[i]]=1
    }
    for(const key in obj) {
        if(cnt%2==0) cnt+=obj[key]
        else if(obj[key]>1 && obj[key]%2) cnt+=obj[key]-1
        else if(obj[key]>1) cnt+=obj[key] 
    }
    return cnt
};