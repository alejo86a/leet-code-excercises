/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */

var minEnd = function(n, x) {
    let num = BigInt(x) , one = BigInt(1);

    let unsetBits = [];
    for (let bit = 0n ; bit < 63n ; bit++) {
        if(num >> bit & one ^ one) {
            unsetBits.push(bit);
        }
    }

    let mask = BigInt(n - 1);
    for (let index = 0n ; index < unsetBits.length ; index++) {
        if (mask >> index & one) {
            console.log(unsetBits[index]);
            num |= one << unsetBits[index];
        }
    }
    return Number(num);
};

// var minEnd = function(n, x) {
//     const nums = [x];
//     let i =1, counter =1, last =x;
//     while(counter<n){
//         if((x & x+i)===x){
//             last = x+i
//             counter++;
//        }
//         i++;
//     }
//     return last
// };