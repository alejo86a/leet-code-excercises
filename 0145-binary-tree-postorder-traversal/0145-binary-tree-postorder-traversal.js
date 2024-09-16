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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    postOrderRecursive(root,result);
    return result;
};

const postOrderRecursive = (root,result) => {
    if(!root) return result;
    postOrderRecursive(root.left,result)
    postOrderRecursive(root.right,result)
    result.push(root.val)
}