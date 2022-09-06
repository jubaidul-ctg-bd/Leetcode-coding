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
 * @return {boolean}
 */ 

var BST = function(root, minNode, maxNode) {
    if(!root) return true
    if( (minNode && root.val<=minNode.val) || (maxNode && root.val>=maxNode.val)) return false
    return BST(root.left, minNode, root) && BST(root.right, root, maxNode)
}
var isValidBST = function(root) {
    return BST(root, null, null)
};