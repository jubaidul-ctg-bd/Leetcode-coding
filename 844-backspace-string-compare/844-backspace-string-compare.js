/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a = ""
    let b = "" 
    let cnt=0
    for(let i=s.length-1; i>=0; i--) {
        if(s[i]!="#" && cnt>0) {
            cnt--
        } else if(s[i]!="#" && cnt==0) {
            a += s[i]
        }
        else cnt++
    }
    cnt=0
    for(let i=t.length-1; i>=0; i--) {
        if(t[i]!="#" && cnt>0) {
            cnt--
        } else if(t[i]!="#" && cnt==0) {
            b += t[i]
        }
        else cnt++
    } 
    console.log(a, b)
    if(a==b) return true
    else return false
};