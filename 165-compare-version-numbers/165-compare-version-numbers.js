/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let str = version1
    let str2 = version2
    str = str.split('.')
    str2 = str2.split('.')
    let len = Math.max(str.length, str2.length)
    for(let i=0; i<len; i++) {
        console.log(str, str2)
        if(str.length && str2.length) {
            if(Number(str[0])>Number(str2[0])) return 1 
            else if(Number(str[0])<Number(str2[0])) return -1
            else {
                str.shift()
                str2.shift()
            }
        }
        else if(str.length) {
            if(Number(str[0])>0) return 1 
            else str.shift()
        }
        else if(str2.length) {
            if(Number(str2[0])>0) return -1 
            else str2.shift()
        }
    }
    return 0
    
};