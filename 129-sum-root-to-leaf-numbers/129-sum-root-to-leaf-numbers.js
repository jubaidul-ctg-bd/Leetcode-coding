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
 * @return {number}
 */
let sum = 0

var DFS = function(root, s) {
    if(!root) return
    s += (''+root.val)
    if(root.left) DFS(root.left, s) 
    if(root.right) DFS(root.right, s) 
    if(!root.left && !root.right) {
        sum+=parseInt(s)
    }
};

var sumNumbers = function(root) {
    sum = 0
    DFS(root, '')
    return sum
};