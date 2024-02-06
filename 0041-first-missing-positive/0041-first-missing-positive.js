/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let minP=1;
    const arrSet = new Set();
    for(let i = 0; i<=nums.length;i++){
        if(nums[i]===minP){
            minP++;
        }
        arrSet.add(nums[i])
    }
    while(arrSet.has(minP)){
        minP++
    }
    return minP;
};