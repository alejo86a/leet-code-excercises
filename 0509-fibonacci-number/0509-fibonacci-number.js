/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = [0,1];
    for(let i=2;i<=n;i++){
        memo[i] = memo[i-2]+memo[i-1];
    }
    return memo[n];
};