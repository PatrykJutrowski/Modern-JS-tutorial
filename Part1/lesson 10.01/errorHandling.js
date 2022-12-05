function myError(){
    let name = "John";
    let surname = "John"
    try{
        alert("Welcome " + name + " " + surrname)//surrname is not defined
    }catch (err){
        alert(err.message)
    }
}

myError()