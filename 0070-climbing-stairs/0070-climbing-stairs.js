/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = [1,2,3];
    for(let i=3;i<=n;i++){
        memo[i]= memo[i-2]+memo[i-1];
    }
    return memo[n-1];
};