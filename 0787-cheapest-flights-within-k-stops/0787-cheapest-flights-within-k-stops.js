/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let map = {}

    for(let [x,y,z] of flights){
        if(!map[y]) map[y] = []
        map[y].push([x,y,z])
    }

    let min = Infinity;

    let iterate = (end,sum,count)=>{
        if(count>k || sum >min) return;

        if(end == src){
            min = Math.min(min,sum)
            return;
        }
        if(!map[end]) return;

        for(let [x,y,z] of map[end]){
            iterate(x,sum+z,count+1)
        }
    }
    iterate(dst,0,-1)
    return min == Infinity ? -1 : min;
};
// const checkF = (f1,f2) =>{
//     return f1[0]===f2[0] && f1[1]===f2[1] && f1[2]===f2[2]
// }

// var findCheapestPrice = function(n, flights, src, dst, k) {
//     let pos = src,cost=0,path =[],blocked = [];
//     while(pos!==dst){
//         let auxF = [pos,pos,-1];
//         let acc = false;
//         for(let i=0;i<flights.length;i++){
//             if(flights[i][0]===pos && (auxF[2]===-1 || auxF[2]>flights[i][2]) && flights[i][1]!==src && blocked.findIndex(e=>checkF(e,flights[i]))===-1){
//                 auxF = flights[i];
//                 acc = true;
//             }
//         }
//         path.push(auxF);
//         console.log({path},acc)
//         if(auxF[1]!==dst && (path.length>=(k+1) || !acc)){
//             blocked.push(path.pop())
//         }else{
//             pos=auxF[1];
//         }
//     console.log(path,{blocked});
//     }
//     console.log(path);
//     return path.reduce((a,e)=>a+e[2],0);
// };
// const checkF = (f1,f2) =>{
//     return f1[0]===f2[0] && f1[1]===f2[1] && f1[2]===f2[2]
// }