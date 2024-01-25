/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const firstApperar = new Map();
    for(let i =0;i<s.length;i++){
        if(firstApperar.has(s[i])){
            return s[i]
        }
        firstApperar.set(s[i],i)
    }
};