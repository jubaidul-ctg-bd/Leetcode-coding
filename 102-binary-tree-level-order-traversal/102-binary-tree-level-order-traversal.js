/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let ans=[]
var dfs = function(root, level){
    if(!root) return 
    if(!ans[level]) ans[level]=[]
    ans[level].push(root.val)
    if(root.left) dfs(root.left, level+1) 
    if(root.right) dfs(root.right, level+1)
}
var levelOrder = function(root) {
    ans = []
    if(root) dfs(root, 0)
    return ans
};

