/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    banned = banned.map(x=>x.toLowerCase())
    const wordMap = new Map();
    const splitted = paragraph.toLowerCase().split(/\s*[\s,.!\?;:'']\s*/).filter(x=>!banned.includes(x) && x!=="")
    for(let i =0;i<splitted.length;i++){
        let times = 1;
        let word = splitted[i].toLowerCase()
        if(wordMap.has(word)){
            times = wordMap.get(word);
            times++;
        }
        wordMap.set(word,times)
    }
    return Array.from(wordMap).sort((a,b)=>b[1]-a[1])[0][0]
};