/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    return nums.reduce((a,b)=>b>=k?a:a+1,0)
};