/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
let ans=[]
var dfs = function(root) {
    if(!root) return
    ans.push(root.val)
    root.children.forEach(item => {
        dfs(item)
    })
}

var preorder = function(root) {
    ans=[]
    if(root) dfs(root)
    return ans
};