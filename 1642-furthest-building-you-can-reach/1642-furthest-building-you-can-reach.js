/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    let len = heights.length - 1,
        pq = new MinPriorityQueue({ priority: x => x });
    for (let i = 0; i < len; i++) {
        let diff = heights[i + 1] - heights[i]
        if (diff > 0) {
            if (ladders > 0) pq.enqueue(diff), ladders--;
            else if (pq.front() && diff > pq.front().element)
                pq.enqueue(diff), bricks -= pq.dequeue().element;
            else bricks -= diff;
            if (bricks < 0) return i;
        }
    }
    return len;
};

// var furthestBuilding = function(heights, bricks, ladders) {
//     let i=0;
//     do{
//         if(heights[i+1]>heights[i]){
//             if((heights[i+1]-heights[i])<=bricks){
//                 bricks-= heights[i+1]-heights[i];
//                 console.log('construyo',bricks)
//             }else if(ladders>0){
//                 ladders--;
//                 console.log('escalo',ladders)
//             }else{
//                 return i;
//             }
//        }else{
//            console.log('salta')
//        }
//        console.log(i)
//         i++;
//     }while(i<heights.length);
//     return i-1;
// };