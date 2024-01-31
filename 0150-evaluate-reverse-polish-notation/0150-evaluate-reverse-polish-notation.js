/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack  = []
    let v1=0,v2=0,result=0;
    tokens.forEach(e=>{
        if(["+","-","/","*"].includes(e)){
            v2 = stack.pop();
            v1 = stack.pop();
            result=eval(v1+e+"("+v2+")");
            stack.push(result>0?Math.floor(result):Math.ceil(result));
        }else{
            stack.push(Number(e));            
        }
    })
    
    return stack[0];
};