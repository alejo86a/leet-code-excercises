/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const resMap = new Map();
    nums.forEach(e=>{
        if(!resMap.has(e)){
            resMap.set(e,1);
        }else{
            resMap.set(e,resMap.get(e)+1);
        }
    });
    const res = Array.from(resMap).map(e=>e[1]);
    const max = Math.max(...res);
    const resF=  res.filter(e=>e===max);
    return resF.length*resF[0];
};