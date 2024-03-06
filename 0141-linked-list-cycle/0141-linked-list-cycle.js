/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const arrMap = new Set();
    while(head){
        if(arrMap.has(head)){
            return true;
        } else{
            arrMap.add(head);
            head = head.next;
        }
    }
    return false;
};