/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    for(let i=0;i<nums.length;i++){
        complement = target-nums[i]
        if(numsMap.has(complement)){
            return [i,numsMap.get(complement)]         
        }
        numsMap.set(nums[i],i)
    }
};