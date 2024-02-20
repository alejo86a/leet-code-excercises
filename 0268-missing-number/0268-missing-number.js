/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const res = (new Array(nums.length+1)).fill(false);
    for(let i=0;i<nums.length;i++){
        res[nums[i]] = true;
    }
    return res.findIndex(e=>!e);
};