var globalVar = "I'm global";

function outerFunction() {
    console.log("Before declaration:", hoistedVar);
    
    var hoistedVar = "I'm hoisted with var";
    let letVar = "I'm declared with let";
    const constVar = "I'm declared with const";
    
    console.log("After declaration:", hoistedVar);

    function innerFunction() {
        
        console.log("From outer scope via closure:", letVar);
        console.log("From global scope:", outerFunction.globalVar); 
        
        const capturedValue = letVar;
        
        return function() {
            console.log("Nested closure accessing:", capturedValue);
            console.log("Also can access:", constVar);
        };
    }
    
    return innerFunction;
}

console.log("Global variable:", globalVar);

var resultFunc = outerFunction();

var closure1 = resultFunc();
closure1(); 