/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let obj = {}
    while(n) {
        if(obj[n]) return false
        obj[n]=1
        let x=n
        let tmp=0
        while(x){
            tmp+=(x%10)*(x%10)
            x=parseInt(x/10)
        }
        if(tmp==1) return true
        n=tmp
    }
};