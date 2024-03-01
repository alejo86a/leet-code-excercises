/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const numberOfOnes = s.split('').filter(e=>e==='1').length-1;
    return [...(new Array(numberOfOnes)).fill(1),...(new Array(s.length-numberOfOnes-1)).fill(0)].join('')+'1';
};