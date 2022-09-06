/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var dfs=(image, sr, sc, color, point)=>{
    image[sr][sc]=color
    if(sr>0 && image[sr-1][sc]!=color && image[sr-1][sc]==point) dfs(image, sr-1,sc,color,point)
    if(sr<image.length-1 && image[sr+1][sc]!=color && image[sr+1][sc]==point) dfs(image, sr+1,sc,color,point)
    if(sc>0 && image[sr][sc-1]!=color && image[sr][sc-1]==point) dfs(image, sr,sc-1,color,point)
    if(sc<image[sr].length-1 && image[sr][sc+1]!=color && image[sr][sc+1]==point) dfs(image, sr,sc+1,color,point)
    return image
}

var floodFill = function(image, sr, sc, color) {
    return dfs(image, sr, sc, color, image[sr][sc])
};