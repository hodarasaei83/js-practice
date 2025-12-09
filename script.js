//scope-hoistig-closure
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


//array methods
const items = [
    {name:'Tv', price:1000},
    {name:'Book', price:200},
    {name:'Computer', price:2000},
    {name:'Keyboard', price:300},
    {name:'Phone', price:200},
    {name:'Car', price:3000},
]

const filteredItems = items.filter((item) => item.price <= 500)
console.log(filteredItems)

const mapedItems = items.map((item) => item.name)
console.log(mapedItems)

const reducedItems = items.reduce((totalPrice, item) => {
    return item.price + totalPrice
}, 0)
console.log(reducedItems)

//destructuring & spread
const [a, ,c, ...rest] = items
console.log("first element:",a.name)
console.log("third element:",c.name)
console.log("other elements", rest)

const myInfo = {
    name: 'Hoda',
    age: 21,
    address: {
        city: 'Somewhere',
        street: 'unknown'
    }
}

const {name:firstName , age, job = 'student', address: {city} } = myInfo
console.log("my information:",firstName, age, job)
console.log("my city is",city)

function printUser({name}){
    console.log("my name is",name)
}

printUser(myInfo)