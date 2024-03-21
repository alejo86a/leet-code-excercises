/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return null;
    const stack = [];
    while(head){
        stack.unshift(head);
        head = head.next;
    }
    const newHead = stack[0];
    while(stack.length>0){
        head = stack.shift();
        head.next =stack[0] || null;
    }
    return newHead;
};