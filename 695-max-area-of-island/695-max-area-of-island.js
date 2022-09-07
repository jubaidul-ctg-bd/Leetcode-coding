/**
 * @param {number[][]} grid
 * @return {number}
 */
let cnt=0
var dfs=(image, sr, sc, color, point)=>{
    cnt+=1
    image[sr][sc]=color
    if(sr>0 && image[sr-1][sc]!=color && image[sr-1][sc]==point) dfs(image, sr-1,sc,color,point)
    if(sr<image.length-1 && image[sr+1][sc]!=color && image[sr+1][sc]==point) dfs(image, sr+1,sc,color,point)
    if(sc>0 && image[sr][sc-1]!=color && image[sr][sc-1]==point) dfs(image, sr,sc-1,color,point)
    if(sc<image[sr].length-1 && image[sr][sc+1]!=color && image[sr][sc+1]==point) dfs(image, sr,sc+1,color,point)
    return image
}

var maxAreaOfIsland = function(grid) {
    let ans=0
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
             if(grid[i][j]==1) {
                cnt=0
                dfs(grid, i, j, 2, 1)
                ans=Math.max(ans, cnt)
            }
        }
    }
        
    return ans
    
};