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
var inorderTraversal = function(root) {
    const res = [];
    inorderRecursive(root,res)
    return res;
};

const inorderRecursive =(root,res) =>{
    if(root === null){
        return;
    }
    inorderRecursive(root?.left,res);
    res.push(root?.val)
    inorderRecursive(root?.right,res);
}