/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const result = Math.log2(n);
    return n>0 && Math.floor(result)===result;
};