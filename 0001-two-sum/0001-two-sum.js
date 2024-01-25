/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        secondIndex = nums.toSpliced(i).findIndex((x)=>x===(target-nums[i]))
        if(secondIndex!==-1){
            return [secondIndex,i]         
        }
    }
};