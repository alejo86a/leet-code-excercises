/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const pos = [], neg = [], res =[];
     for(let num of nums){        
        if(num>0){
            pos.push(num);
        }else{
            neg.push(num);
        }
     }

    for(let i =0,j=0;i<nums.length/2;i++,j++){
        res.push(pos[i]);
        res.push(neg[i]);
    }
    return res;
};

// var rearrangeArray = function(nums) {
//     const pos = [], neg = [], res =[];
//     let i=0;
//     while(0<nums.length || pos.length>0 || neg.length>0){
//         if(nums.length>0){
//             const num = nums.shift();
//             if(num>0){
//                 pos.push(num);
//             }else{
//                 neg.push(num);
//             }
//         }
//         if(i%2===0){
//             if(pos.length>0){
//                 res.push(pos.shift());
//                 i++;
//             }else if(nums[0]>=0){
//                 res.push(nums.shift());
//                 i++;
//             }
//         } else {
//             if(neg.length>0){
//                 res.push(neg.shift());
//                 i++;
//             }else if(nums[0]<0){
//                 res.push(nums.shift());
//                 i++;
//             }
//         }
//     }
//     return res;
// };

// let pos = nums.filter(e=>e>=+0);
//     let neg = nums.filter(e=>e<0);
//     const res =[];
//     for(let i =0;i<nums.length;i++){
//         if(i%2===0){
//             res.push(pos.shift());
//         } else {
//             res.push(neg.shift());
//         }
//     }
//     return res;