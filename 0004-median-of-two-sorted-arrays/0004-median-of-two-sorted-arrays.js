/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const concated =  [...nums1,...nums2].sort((a,b)=>a-b);
    return concated.length%2==1?concated[(concated.length-1)/2]:(concated[(concated.length)/2-1]+concated[(concated.length)/2+1-1])/2;
};

// var findMedianSortedArrays = function(nums1, nums2) {
//     return (nums1.concat(nums2)).reduce((a,b)=>a+b)/(nums1.length+nums2.length)
// };