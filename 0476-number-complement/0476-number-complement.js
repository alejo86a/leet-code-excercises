/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let result = [];
    while(num>0){
        result.unshift(num%2)
        num = Math.floor(num/2)
    }
    console.log(result)
    return result.reduce((acc,x,i)=>acc+((x+1)%2)*(2**(result.length-i-1)),0)
};