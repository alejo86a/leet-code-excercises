/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    while(nums1.length>0 && nums2.length>0){
        const e1 = nums1[0], e2 = nums2[0];
        if(e1===e2) return e1
        if(e1>e2) nums2.shift();
        if(e2>e1) nums1.shift();
    }
    return -1;
};