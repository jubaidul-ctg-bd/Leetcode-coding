/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
    let m=grid.length
    let n=grid[grid.length-1].length
    let dp={}
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(i>0 && j>0) dp[`${i}${j}`]=Math.min(dp[`${i-1}${j}`]+grid[i][j], dp[`${i}${j-1}`]+grid[i][j])
            else if(i>0) dp[`${i}${j}`]=dp[`${i-1}${j}`]+grid[i][j] 
            else if(j>0) dp[`${i}${j}`]=dp[`${i}${j-1}`]+grid[i][j] 
            else dp[`${i}${j}`]=grid[i][j] 
        }
    }
    return dp[`${m-1}${n-1}`]
};