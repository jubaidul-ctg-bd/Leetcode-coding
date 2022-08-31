/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var pow = function(a, b){
    let res = 1;
    for(let i = 1; i <= b; ++i){
        res %= 1337;
        res *= (a % 1337);
    }
    return res % 1337;
}

var superPow = function(a, b) {
    let Mod = 1337
    a = a%Mod
    let ans = 1;
    for(let i=0; i<b.length; i++) {
        ans = (pow(ans,10) * pow(a,b[i]))%Mod
    }
    return ans
};