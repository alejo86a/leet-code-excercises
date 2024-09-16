/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const diff = [];
    const timesF = timePoints.map(t=>{
        const tSplitted = t.split(":")
        return Number(tSplitted[0])*60+Number(tSplitted[1])
    }).sort((a,b)=>a-b);
    timesF.forEach((t,i,arr)=>{
        if((i-1)<0){
            diff.push(Math.abs(1440+t-timesF[timesF.length-1]))
        }else{
            diff.push(Math.abs(t-timesF[(i-1)]))            
        }
        diff.push(Math.abs(t-timesF[(i-1)<0?timesF.length-1:i-1]))
        diff.push(Math.abs(t-timesF[(i+1)%timesF.length]))
    })
    return diff.sort((a,b)=>a-b)[0];
};