/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    return words.find(e =>isPalin(e)) || "";
};
 const isPalin= (w)=>{
     let i = 0;
     while(w[i]===w[w.length-1-i] && i<w.length){
         i++;
     }
     return (i===w.length)
 }