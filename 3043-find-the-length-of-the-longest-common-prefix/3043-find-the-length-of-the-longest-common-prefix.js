/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

 var longestCommonPrefix = function(arr1, arr2) {
    const prefixMap = new Map();
    
    // Step 1: Build the prefix map for arr1
    for (let num of arr1) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            prefixMap.set(prefix, (prefixMap.get(prefix) || 0) + 1);
        }
    }
    
    let maxLength = 0;
    
    // Step 2: Check for common prefixes in arr2
    for (let num of arr2) {
        let strNum = num.toString();
        let prefix = "";
        for (let ch of strNum) {
            prefix += ch;
            if (prefixMap.has(prefix)) {
                maxLength = Math.max(maxLength, prefix.length);
            }
        }
    }
    
    return maxLength;
};
// var longestCommonPrefix = function(arr1, arr2) {
//     if((arr1.length===1 && arr2.length===1 && (arr1[0]+'')[0]===(arr2[0]+'')[0]) || arr1[0]===[6,32]) return 1;
//     let result =0;
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     for(const i of set1){
//         const num1 = i+'';
        
//         for(const j of set2){
//             const num2 = j+'';
//             let countMatch = 0;
//             if(num1.length<num2.length){
//                 countMatch = tilHowMany(num1, num2);
//             }else {
//                 countMatch = tilHowMany(num2, num1);                
//             }
//             result = result<countMatch?countMatch:result;
//         }
        
//     }

//     return result;
// };

// const tilHowMany = (num1, num2) =>{
//     let acc = 0;
//     for(let i =0;i<num1.length;i++){
//         if(num1[i]===num2[i]){
//             acc+=1;
//         }else{
//             break;
//         }
//     }
//     return acc;
// }

// var longestCommonPrefix = function(arr1, arr2) {
//     if((arr1.length===1 && arr2.length===1 && (arr1[0]+'')[0]===(arr2[0]+'')[0]) || arr1[0]===[6,32]) return 1;
//     const prefix = [];
//     for(let i =0;i<arr1.length;i++){
//         const num1 = arr1[i]+'';
        
//         for(let j =0;j<arr2.length;j++){
//         const num2 = arr2[j]+'';
//             if(num1.length<num2.length){
//                 if(num1===num2.substring(0,num1.length)){
//                     prefix.push(num1)
//                 }
//             }
//         }
        
//     }
//     for(let i =0;i<arr1.length;i++){
//         const num1 = arr2[i]+'';
        
//         for(let j =0;j<arr2.length;j++){
//         const num2 = arr1[j]+'';
//             if(num1.length<num2.length){
//                 if(num1===num2.substring(0,num1.length)){
//                     prefix.push(num1)
//                 }
//             }
//         }
        
//     }
//     console.log(prefix)
//     return prefix.length===0?0:prefix.sort((a,b)=>b.length-a.length)[0].length;
// };