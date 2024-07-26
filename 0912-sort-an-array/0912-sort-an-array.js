/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = (nums) => {
 return mergeSort(nums)   ;
}

function mergeSort(array) {
    // Base case: If the array has only one element, return it (already sorted)
    if (array.length === 1) {
        return array;
    }

    // Divide the array into two halves
    const middle = Math.floor(array.length / 2); // Find the middle index
    const left = array.slice(0, middle); // Split the array into left half
    const right = array.slice(middle); // Split the array into right half

    // Recursively call mergeSort on the left and right halves
    return merge(
        mergeSort(left), // Recursively sort the left half
        mergeSort(right) // Recursively sort the right half
    );
}


function merge(left, right) {
    let resultArray = [],
        leftIndex = 0,
        rightIndex = 0;

    // Loop through both arrays, comparing elements and adding the smaller one to the resultArray
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // Move to the next element in the `left` array
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // Move to the next element in the `right` array
        }
    }

    // Concatenate the remaining elements from either `left` or `right` (if any)
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}


const sortArray3 =(nums) =>{
    let huboCambios = true;
    while(huboCambios){
        huboCambios=false;
        let menor = nums[0];
        for(let i=1;i<nums.length;i++){
            if(menor>nums[i]){
                const temp = nums[i];
                nums[i] = menor;
                nums[i-1] = temp;
                huboCambios = true;
            }else{
                menor = nums[i];
            }
            
        }
    }
    return nums;
}

var sortArray2 = function(nums) {
    let respuesta =[]
    while(nums.length>0){//encontrar el mas pequeno
    let menor= Number.MAX_SAFE_INTEGER;
    let menorPos =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<menor){
            menor =nums[i]
            menorPos=i
        }        
    }
    respuesta.push(menor)
    nums.splice(menorPos,1)
    }
    return respuesta;
};