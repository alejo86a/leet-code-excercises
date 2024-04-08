/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
 while (students.length > 0 && students.indexOf(sandwiches[0]) !== -1) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
        }
        else students.push(students.shift());
    }
    return students.length;
    
};

function approach(){
    let accStudent=0, accSandwich =0, deleted=false;
    for(let i =0;i<sandwiches.length;i++){
        if(students[i]===sandwiches[i]){
            students.shift();
            sandwiches.shift();
            deleted=true;
        }else{
            let aux = students.shift();
            students.push(aux);
            i--;
        }
        if(i===sandwiches.length-1){
            if(deleted){
               i=0;
               deleted=false;
               }else{
                break;
            }
        }
    }
    if(students[0]===sandwiches[0]){
            students.shift();
            sandwiches.shift();
        
    }
    return sandwiches.length;
}