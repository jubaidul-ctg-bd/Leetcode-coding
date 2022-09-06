/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let ans
var LCA = (root, p, q, x, y) => {
    if(!root) return null
    if(root.val<p.val && root.val<q.val) return LCA(root.right, p, q)
    if(root.val>p.val && root.val>q.val) return LCA(root.left, p, q)
    return root
}
var lowestCommonAncestor = function(root, p, q) {
    ans=root
    return LCA(root, p, q)
};