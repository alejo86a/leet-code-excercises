/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    const operation = nums[0]+nums[1];
    let acc = 1;
    for(let i=2;i<nums.length;i=i+2){
        if(nums[i]+nums[i+1]===operation) {
            acc++;
        }else{
            break;
        };
    }
    return acc;
};