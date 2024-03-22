/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head.next) return true;
    const stackVal= [];
    while(head){
        stackVal.push(head.val);
        head = head.next;
    }
    let end = stackVal.length-1;
    for(let i=0;i<stackVal.length;i++){
       if(stackVal[i]!==stackVal[end]) return false;
        end--;
    }
    return true;
};