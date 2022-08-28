/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ob = {
        "(":")",
        "{":"}",
        "[":"]"        
    }
    let ss = []
    for(let i=0; i<s.length; i++) {
        if(ss.length && ob[ss[ss.length-1]]==s[i]) {
            
            ss.pop()
        }
        else ss.push(s[i])
        
    }
    
    if(ss.length) return false
    else return true
};