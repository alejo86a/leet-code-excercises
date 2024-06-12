/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let change;
    do{
        change=false;
        for(let i =0;i<nums.length;i++){
            if(nums[i]>nums[i+1]){
                const aux = nums[i];
                nums[i]=nums[i]+nums[i+1];
                nums[i+1]=nums[i]-nums[i+1];
                nums[i]=nums[i]-nums[i+1];
                change=true;
            }
        }
    } while(change);
    return nums;
};