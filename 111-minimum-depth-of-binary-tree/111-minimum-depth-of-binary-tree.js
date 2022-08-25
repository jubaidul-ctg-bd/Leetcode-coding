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
    
     if(currentNode && currentNode.left != null) TreeNode(currentNode.left, level+1)  
     if(currentNode && currentNode.right != null) TreeNode(currentNode.right, level+1)  
     if(currentNode && currentNode.left == null && currentNode.right == null) {
         cnt = Math.min(cnt, level)
         console.log(level)
     } 
     
     return
}
var minDepth = function(root) {
    cnt = 10e18
    if(root)TreeNode(root, 1) 
    else cnt = 0
    console.log(cnt)
    return cnt
};