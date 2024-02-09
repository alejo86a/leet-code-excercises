/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const res = [];
    let option = [];
    nums = nums.sort((a,b)=>b-a)
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        option = []
        option.push(nums[i]);
        for(let j=0;j<nums.length;j++){
            if(i!==j){
                let every=true;
                if(option.every(k=>k%nums[j]===0 || nums[j]%k===0)){
                    option.push(nums[j]);
                }
            }
        }
        res.push(option);
    }
    return res.length===1?res.flat():res.sort((a,b)=>b.length-a.length)[1];
};

// var largestDivisibleSubset = function(nums) {
//     const res = [];
//     let option = [];
//     nums = nums.sort((a,b)=>a-b)
//     console.log(nums)
//     for(let i=0;i<nums.length;i++){
//         option = []
//         option.push(nums[i]);
//         for(let j=0;j<nums.length;j++){
//             if(i!==j){
//                 let every=true;
//                 for(let k=0;k<option.length;k++){
//                     if(nums[k]%nums[j]!==0 && nums[j]%nums[k]!==0){
//                         every = false;
//                     }
//                 }
//                 if(every){
//                     option.push(nums[j]);
//                 }
//             }
//         }
//         res.push(option);
//     }
//     console.log(res)
//     return res.length===1?res.flat():res.sort((a,b)=>b.length-a.length)[1];
// };

// var largestDivisibleSubset = function(nums) {
//     const res = []
//     if(nums.length===1){return nums}
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             console.log(nums[i],nums[j])
//             if(nums[i]%nums[j]===0 || nums[j]%nums[i]===0){
//                 res.push(nums[i]);
//                 res.push(nums[j]);
//                 break;
//             }
//         }   
//     }
//     const result = [...(new Set(res))]
//     return result.length===0?nums.slice(-1):result;
// };

// var largestDivisibleSubset = function(nums) {
//     const res = []
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             console.log(nums[i],nums[j])
//             if(nums[i]%nums[j]===0 || nums[j]%nums[i]===0){
//                 res.push([nums[i],nums[j]]);
//                 i=j;
//                 break;
//             }
//         }   
//     }
//     return res.flat();
// };