/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let len = s.length
    let ans = []
    for(let i=0; i<len-3; i++) {
        for(let j=i+1; j<len-2; j++) {
            for(let k=j+1; k<len-1; k++) {
                let a = s.slice(0,i+1)
                let b = s.slice(i+1,j+1)
                let c = s.slice(j+1,k+1)
                let d = s.slice(k+1,len) 
                let tmp = `${parseInt(a)}${parseInt(b)}${parseInt(c)}${parseInt(d)}`
                if(tmp.length==len && parseInt(a)<=255 && parseInt(b)<=255 && parseInt(c)<=255 && parseInt(d)<=255) {
                    ans.push(`${a}.${b}.${c}.${d}`)
                }
            }
        }
    }
    return ans
};