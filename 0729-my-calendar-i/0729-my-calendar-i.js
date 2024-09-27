var MyCalendar = function() {
    this.val = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let left = 0
    let right = this.val.length-1;

    while(left <= right){
        let mid = Math.floor(left + (right - left)/2);
        const [s, e] = this.val[mid];
       if(s<end && e>start) return false;

        if(start>=e) left=mid+1; 
        else right=mid-1;

    }
        this.val.splice(left,0,[start,end]);
    return true;
};
// var MyCalendar = function() {
//     this.appoinments = []
// };

// /** 
//  * @param {number} start 
//  * @param {number} end
//  * @return {boolean}
//  */
// MyCalendar.prototype.book = function(start, end) {
//     if(this.appoinments.length ===0){
//         this.appoinments.push([start,end])
//         return true;
//     }
//     for(let i=0;i<this.appoinments.length;i++){
//         const appoinment = this.appoinments[i];
//         if(appoinment[0]>start){
//             //first position
//             if(i===0){
//                 if(appoinment[1]<=start){
//                     this.appoinments.unshift([start,end])
//                     return true
//                 }else{
//                     return false;
//                 }
//             }
//             //midle position
//             if(this.appoinments[i-1][i]<=start && appoinment[0]>=end){
//                 this.appoinments.splice(i,0,[start,end])
//                 return true;
//             }

//         }
//     }
//     //finish without inserting
//     if(this.appoinments[this.appoinments.length-1][1]<=start){
//         this.appoinments.push([start,end])
//         return true;
//     }else{
//         return false;
//     }

// };


/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */