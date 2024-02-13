/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const aux =l1.next;
    let diff =0, res=null, resHead,l1Head = l1,l2Head = l2;
    while(l1Head !== null || l2Head!==null){
        let val = diff;
        if(l2Head!== null){
            val+=l2Head?.val;
            l2Head = l2Head.next;
        }
        if(l1Head !== null){
            val+=l1Head?.val;
            l1Head = l1Head?.next;
        }
        if(val>=10){
            const aux= val;
            val=aux-10;
            diff= 1;
        }else{
            diff = 0;
        }
        if(res !== null){
            resHead.next = new ListNode(val,null);
            resHead = resHead.next;
        }else{
            res = new ListNode(val,null);
            resHead = res;
        }
    }
    if(diff>0) resHead.next = new ListNode(diff,null)
    return res;
};

// var addTwoNumbers = function(l1, l2) {
//     const aux =l1.next;
//     const res = new ListNode(l1.val+l2.val,null);
//     let diff =0, resHead=res,l1Head = l1?.next,l2Head = l2?.next;
//     while(l1Head !== null || l2Head!==null){
//         let val = diff;
            // if(l2Head!== null){
            //     val+=l2Head?.val;
            //     l2Head = l2Head.next;
            // }
            // if(l1Head !== null){
            //     val+=l1Head?.val;
            //     l1Head = l1Head?.next;
            // }
//         if(val>=10){
//             console.log('aqui',val)
//             const aux= val;
//             val=aux-10;
//             diff= 1;
//             console.log(val, diff)
//         }else{
//             diff = 0;
//         }
//         console.log({val})
//         resHead.next = new ListNode(val,null);
//         resHead = resHead?.next;
//     }
//     return res;
// };
