/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let obj = {}
    let len = s.length
    let track = {}
    for(let i=0; i<len; i++) {
        if(!obj[s[i]] && !track[t[i]]) {
            obj[s[i]] = t[i]
            track[t[i]] = 1
        } else if(obj[s[i]]!=t[i]) {
            return false
        }
    }
    return true
};