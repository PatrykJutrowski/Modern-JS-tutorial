let list =  ["Ed", "Paul", "John"]// firstly we have specific variable which tell us we create a list, it's alright but we don't know what values it can be
// so its important to give our variables the correct name
function displaylist(){for (name of list){document.write(name + "<br>")}}//second thing is we dont have spaces between function and variable and loops
displaylist()



/* In the above we can see almost same code but with same values but different names of variable
This code tell us do display list full of name but there's some things that we can change and our code
will be more readable and even easier to change something or fix it
The code below is more readable because of name function so we already know what this function will do
what type of variable we have and what this variable store
we have enough spaces so its more comfortable to add something or even read the code
and the last thing is we didnt forget about ";" this symbol which tell us where exactly our code ends
*/
function displayNames(){
    let names = ["Ed", "Paul", "John"];

    for (name of names){
        document.write(name + "<br>");
    }
}

displayNames();