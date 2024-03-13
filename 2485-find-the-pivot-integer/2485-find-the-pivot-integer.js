/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const i = Math.sqrt(((n*(n+1)/2)),2);
    return (i+'').split('.').length>1?-1:i;
};

//const total = (n*(n+1)/2)
//for(let i =1;1<=n;i++){
//    const left = (i*(i+1))/2
//    if(left===(total+i)/2) return i;
//}
//return -1;