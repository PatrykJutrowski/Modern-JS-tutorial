
const makeCounter = () =>{
    let count = 0;
    return () =>{
        return count ++;
    };
}

let counter1 = makeCounter()// these 2 counters have their own internal variables
let counter2 = makeCounter()
console.log(counter1())
console.log(counter2())
console.log(counter2())


//global scope accessible from anywhere
let global = 10
function globalScope(){
    return global;
}

console.log(globalScope());

//block scope inaccessible from outside block


function blockScope(){
    let a = 20;
    let b = 100;
    if(a<b){
        return a + "is lower";
    }else{
        return b + "is higher";
    }
}

console.log(blockScope())