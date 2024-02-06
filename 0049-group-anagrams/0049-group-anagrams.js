/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    for(let i = 0;i<strs.length;i++){
        const sorted = strs[i].split('').sort().join('')
        const val = res[sorted]!==undefined?res[sorted]:[];
        val.push(strs[i]);
        res[sorted]= val;
    }
    return Object.values(res);
};

// var groupAnagrams = function(strs) {
//     const res = [];
//     const resMap = new Set();
//     for(let i = 0;i<strs.length;i++){
//         const sorted = strs[i].split('').sort().join('')
//         if(!resMap.has(sorted)){
//             const indexes = strs.reduce((r, v, i) => r.concat(!v.split('').sort().join('').localeCompare(sorted)? i : []), [])
//             if(indexes.length===0){
//                 res.push([""])

//             }else{
//                 res.push(indexes.map(idx=>strs[idx]))
//             }
//             resMap.add(sorted);
//         }
//     }
//     return res;
// };