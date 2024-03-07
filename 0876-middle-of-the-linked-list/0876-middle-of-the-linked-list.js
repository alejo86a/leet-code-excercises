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
var middleNode = function(head) {
    let lengthList = 0;
    const auxArr =[];
    let auxhead= head;
    while(auxhead){
        lengthList++;
        auxArr.push(auxhead)
        auxhead = auxhead.next;
    }
    const newLength= lengthList%2===0?lengthList/2:(lengthList-1)/2;
    return head.next?auxArr[newLength]:head;
};