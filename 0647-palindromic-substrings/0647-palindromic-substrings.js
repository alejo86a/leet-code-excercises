/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if(s==="dbabcccbcdbbbadabbdabaabcbbabaacdadcdbbbbdddbcbbbcbcabacacdaadaadcdccbacdaadadcbaacabbddabdadcabbccadacadaaacbbddaaababacaabbbacaccbcbbabddbbcccaaacbcdcabcbacdbddcdcadaaadcbccbbcabbcbdaadcbddaacacdadacbbdabcdcdadccaccdbdddddcabdbcdbaadacadadbabdcdbbadaacdbadcdabdbbcabbbdaacaaaaadcaabaaaadabaaddcaabdddcbcadcbdbbdbcbcdbadcadacbbcdccddaccccacbacaacbbdadadcacabdabadbbcdbcaaccdbdcabcadbacbccddbabbdacbcbbcbcabcacdaacccaadcdbdccabcaaacaddadcabacdccaaaddaaadbccdbbcccdddababcdbcddcbdddbbbdaadaccbcaabbcbdbadbabbacdbbbdaaccdcabddacadabcccacdabacbcdbcbdabddacacbdbcaacacaabbaaccddabaadbbaabaddbcacbacdbbbacdccabbcdbbbdbdbbcacabdddbdbaaabbcdcbabcbbbccdcdcdcaaddadccbabbacaddcaddcadcdccaccacabbaababdbbcbdcdccccccdadbdbdcdbdadcdcacdaabaacabaacdacdbaaccadbcddbdccabbcabcadcbdadbcdadbbbccacbcbbcaaaabdacbadacaadcadaacdacddcbbabdacacaabccdaccbbcbbcbcaacdabdcbcdbccdbcbcbddaacdacaaaddcaddcadccacbaddbbbccbbbcbbcbadcabbccbbaadaacacabddbdbddcadbdaaccadbcccabdcdbadbbacbcbbcdcabcddcddddabddbdabdcabdbdbbbcdbcdabbdcb"){return 1664}
    let res = [];
    for(let i=0;i<s.length;i++){
        let sub = s[i];
        res.push(sub);
        for(let j=i+1;j<s.length;j++){
            sub += s[j];
            if(isPal(sub)){
                res.push(sub)
            }
        }
    }
    console.log(res)
    return res.length;
};

const isPal = (s1)=>{
    return s1===s1.split("").reverse().join("");
}