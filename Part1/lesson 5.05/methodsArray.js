let months = ["January", "February", "Monday", "Tuesday"];

let days = months.splice(2,1,"April");

console.log(days); // ["Monday", "Tuesday"]
console.log(months);//splice method


const numbers = [1,2,3,4,5];

const numbers2 =numbers.slice(1,4);//display array from index 1 to 4
console.log(numbers);
console.log(numbers2);//slice method


const a = [1,2,3];//concat method
const b = [4,5,6];
const c = a.concat(b); //create new array from 2 above
console.log(c)

const array = [1,2,3,4,5];//forEach method
let sum = 0;
array.forEach(item=>{
    sum+= item
});
console.log(sum);

const items = [1,2,3,4,5];

const includesArr = items.includes(2);//includes 2 elements in list

console.log(includesArr);//true

const foundItem = items.find((item)=>{
    return item === 2
});

console.log(foundItem)//looking for specific item (number 2)

const filteredItems = items.filter((item)=>{
    return item > 2
});

console.log(filteredItems)// higher than 2


const names = ["Paul", "Patrick", "Florin", "Patricia"];

names.sort()

console.log(names);

const arrayNumbers = [1,15,26,72,18,5];

arrayNumbers.sort(compareFunction);

console.log(arrayNumbers);//convertig numbers to strings

function compareFunction(a,b){
    //<0 ... a
    //2. 0 nothing will happen
    //>0 becomes b first
    return a-b;//as we wanted
}