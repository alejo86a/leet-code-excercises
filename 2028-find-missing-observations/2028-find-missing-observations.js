/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const preSum = rolls.reduce((a,b)=>a+b,0)
    const total = mean*(n+rolls.length)

    const falta = total-preSum;

    if(falta<n || falta > 6*n){
        return []
    }
    console.log(falta)
    
    const base = Math.floor(falta/n);
    const sobra = falta%n;
    
    const result = new Array(n).fill(base)
    for(let i = 0;i<sobra;i++){
        result[i] += 1;
    }

    return result;

    return []
};