/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res ='';
    for(let i=s.length-1;i>=0;i--){
        if(s[i]===" " && res.length>0){
            break;
        }else if(s[i]!==" "){
            res+=s[i];                    
        }
        
    }
   return res.trim().length;
};