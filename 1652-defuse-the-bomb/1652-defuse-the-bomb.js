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
            if(k>0){
                const pos = (i+j)%(code.length);
                acc+=code[pos];
            }else{
                let pos = (i - j + code.length) % code.length;
                acc+=code[pos];
            }            
        }
        return acc;
    });
    return code;x
};