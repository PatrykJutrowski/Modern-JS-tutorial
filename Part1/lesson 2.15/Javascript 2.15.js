//This present a function with global scope
const food = ["banana", "apple", "pear", "pineapple"];

function myFood(){
    document.write(food);
}
myFood();

//this present a function with local scope
function getFood(){
    let food1 = ["banana", "apple", "pear", "pineapple"];
    let text = document.getElementById("inp").value;// <-- this is local variable
    if (!text){
        return;
    }
    if (food1.includes(text)){
        document.getElementById("button");
        alert("Is in the list");
    }else if (!text.includes(food1)){
        document.getElementById("button");
        alert("wrong")
    }

}
getFood();