/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const setNums = new Set(nums);
    while(head && setNums.has(head.val)){
        head = head.next;
    }    
    
    let headAux= head;
    while(headAux && headAux.next){
        if(setNums.has(headAux.next.val)){
            headAux.next = headAux.next.next;
        }else{
            headAux = headAux.next;

        }
    }
    
    return head;
};