/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const need = new Array(128).fill(0);
    const window = new Array(128).fill(0);
    for (const c of t) {
        ++need[c.charCodeAt(0)];
    }
    let cnt = 0;
    let j = 0;
    let k = -1;
    let mi = 1 << 30;
    for (let i = 0; i < s.length; ++i) {
        ++window[s.charCodeAt(i)];
        if (need[s.charCodeAt(i)] >= window[s.charCodeAt(i)]) {
            ++cnt;
        }
        while (cnt === t.length) {
            if (i - j + 1 < mi) {
                mi = i - j + 1;
                k = j;
            }
            if (need[s.charCodeAt(j)] >= window[s.charCodeAt(j)]) {
                --cnt;
            }
            --window[s.charCodeAt(j++)];
        }
    }
    return k < 0 ? '' : s.slice(k, k + mi);
};

// var minWindow = function(s, t) {
//     const options =[];
//     s = s.split('');
//     t = t.split('');
//     for(let i=0;i<s.length;i++){
//         let iterator = 0;
//         for(let j=i;j<s.length;j++){
//             if(iterator===(t.length)){
//                 console.log(s.slice(i,j))
//                 options.push(s.slice(i,j).join(''));
//                 console.log(options)
//             }
//             if(s[j]===t[iterator]){
//                 iterator++;
//             }
//         }
//     }
//     console.log(options);
//     return options.sort((a,b)=>a-b)[0];
// };

// var minWindow = function(s, t) {
//     const options =[];
//     s = s.split('');
//     t = t.split('');
//     for(let i=0;i<s.length;i++){
//         let iterator = 0;
//         let word = Array.from(Object.assign(t));
//         console.log({i},s[i])
//         for(let j=i;j<s.length;j++){
//             console.log({iterator})
//             let index = word.findIndex(e=>e.toUpperCase()===s[j].toUpperCase());
//             console.log({word},s[j]+","+index)
//             if(index>-1){
//                 console.log("borrare: ",index)
//                 delete word[index];
//                 word = word.flat()
//                 iterator++;
//             }
//             if(word.length===0){
//                 console.log(s.slice(i,j+1))
//                 options.push(s.slice(i,j+1).join(''));
//                 break;
//             }
//         }
//     }
//     console.log(options.sort((a,b)=>a.localeCompare(b)));
//     return options.length===0?"":options.sort((a,b)=>a.length-b.length)[0];
// };


    // const options =[];
    // s = s.split('');
    // t = t.split('');
    // for(let i=0;i<s.length;i++){
    //     let iterator = 0;
    //     let word = Array.from(Object.assign(t));
    //     for(let j=i;j<s.length;j++){
    //         let index = word.findIndex(e=>e===(s[j]));
    //         if(index>-1){
    //             delete word[index];
    //             word = word.flat()
    //             iterator++;
    //         }
    //         if(word.length===0){
    //             options.push(s.slice(i,j+1).join(''));
    //             break;
    //         }
    //     }
    // }
    // return options.length===0?"":options.sort((a,b)=>a.length-b.length)[0];