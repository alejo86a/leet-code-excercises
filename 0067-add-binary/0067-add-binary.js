/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    const l = a.length>=b.length?a.length:b.length;
    let diff = 0;
    let res = "";
    for(let i =0;i<l;i++){
        const val = ((i>=a.length?0:parseInt(a[a.length-1-i],2))+(i>=b.length?0:parseInt(b[b.length-1-i],2))+parseInt(diff)).toString(2);
        res= (val[val.length-1])+res;
        diff = val.length>=2?1:0;
    }
    if(diff>0) res= diff+res;
    return res;
};

//return (parseInt(a,2)+parseInt(b,2)).toString(2);