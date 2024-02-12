/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    return nums.sort()[nums.length/2 | 0]
};

// const res = new Map();
//     for(num in nums){
//         let times = 1;
//         if(res.has(nums[num])){
//             times += res.get(nums[num]);
//         }
//         res.set(nums[num],times)
//     }
//     return (Array.from(res)).sort((a,b)=>b[1]-a[1])[0][0]