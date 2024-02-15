/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let sum =0,temp=0;
    const sorted = nums.sort((a,b)=>a-b);
    for(let i=0;i<sorted.length;i++){
        if((sum+temp)>sorted[i]){
            sum+=temp+sorted[i];
            temp=0;
        }else if(i<2){
            temp+=sorted[i];
        }else{
            console.log('aca',temp)
            temp+=sorted[i];
        }
    }

    return sum?sum:-1;

};