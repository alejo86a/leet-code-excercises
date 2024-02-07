/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const arrMap = new Map();
    for(let i = 0;i<s.length;i++){
        if(arrMap.has(s[i])){
            arrMap.set(s[i],(arrMap.get(s[i])+1))
        }else{
            arrMap.set(s[i],1)
        }
    }
    return Array.from(arrMap).sort((a,b)=>b[1]-a[1]).map(x=>x[0].repeat(x[1])).join('');
};