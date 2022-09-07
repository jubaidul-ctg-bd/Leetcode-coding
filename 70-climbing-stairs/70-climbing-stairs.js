/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     let Fib=[0,1,2]
    for(let i=3; i<=n; i++) {
        Fib[i] = Fib[i-1]+Fib[i-2]
    }
    return Fib[n]
};