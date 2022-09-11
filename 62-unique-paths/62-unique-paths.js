/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let ans = []
    for(let i=0; i<m; i++) ans.push([])
    ans[0][0]=1
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(j>0 && i>0) ans[i][j] = ans[i][j-1]+ans[i-1][j] 
            else if(j>0) ans[i][j] = ans[i][j-1]
            else if(i>0) ans[i][j] = ans[i-1][j]
        }
    }
    return ans[m-1][n-1]
};