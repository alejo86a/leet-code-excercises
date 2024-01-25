/**
 * @param {number[]} arr
 * @return {boolean}
 */
function validMountainArray(arr) {
    if(arr.length < 3 || arr[0] > arr[1]) return false

    var max_ind = 0
    var growing = true
    
    for(let i = 1; i < arr.length; i++){        
        if(growing && arr[i] > arr[max_ind]){
            max_ind = i
            if(arr[i-1] > arr[i] || max_ind + 1 === arr.length) return false
        } else
        {
            growing = false
            if(arr[i] <= arr[i+1] || arr[i] >= arr[max_ind]) return false
        }
    }
    return true
};