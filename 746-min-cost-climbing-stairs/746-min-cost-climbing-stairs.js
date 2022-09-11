/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [cost[0], cost[1]]
    let len = cost.length
    for(let i=2; i<len; i++) {
        dp[i] = Math.min(dp[i-1]+cost[i], dp[i-2]+cost[i])
    }
    return Math.min(dp[len-1], dp[len-2])
};