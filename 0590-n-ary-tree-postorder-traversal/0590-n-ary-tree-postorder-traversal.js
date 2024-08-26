/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const result = []
    
    if(root === null) return result
    
    const stack = [root]
    
    while(stack.length>0){
        const current = stack.pop();
        result.unshift(current.val)
        
        current.children.forEach(child =>{
            stack.push(child)
        })
    }
    
    return result
};