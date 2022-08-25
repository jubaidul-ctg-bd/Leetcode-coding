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
let cnt = 0
function TreeNode(currentNode, level) {
    cnt = Math.max(cnt, level)
    console.log(currentNode.val, currentNode.left, currentNode.right, level)
     if(currentNode && currentNode.left != null) TreeNode(currentNode.left, level+1)  
     if(currentNode && currentNode.right != null) TreeNode(currentNode.right, level+1)  
     return
}
var maxDepth = function(root) {
     cnt = 0
    if(root)TreeNode(root, 1) 
    return cnt
};