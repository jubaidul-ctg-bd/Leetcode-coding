/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

let cnt = 0
let ans = []
function TreeNode(currentNode) {
     let childLen = currentNode.children.length
     for(let i=0; i<childLen; i++) {
        TreeNode(currentNode.children[i])
     }
     ans.push(currentNode.val)
     return
}

var postorder = function(root) {
    ans = []
    if(root)TreeNode(root) 
    return ans
};