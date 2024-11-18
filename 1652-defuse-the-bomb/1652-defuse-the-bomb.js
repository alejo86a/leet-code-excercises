/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if(k===0) return new Array(code.length).fill(0)
    return code.map((e,i)=>{
        let acc= 0;
        for(let j=1;j<=Math.abs(k);j++){
            const pos = (k>0)?(i+j)%(code.length):(i - j + code.length) % code.length;
            acc+=code[pos];
        }
        return acc;
    });
    return code;x
};