/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    const sorted = happiness.sort((a,b)=>b-a);
    let acc=0;
    for(let i=0;k>0;i++){
        acc+=sorted[i]-(sorted[i]-i>0?i:sorted[i]);
        k--;
    }
    return acc;
};