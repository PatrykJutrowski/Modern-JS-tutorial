/*function pressed(){
    const text = document.getElementById("inp").value;
    if(text==="red"){
        document.getElementById("header").style.color = "red";
    }
    else if (text==="blue"){
        document.getElementById("header").style.color = "blue";
    }
    else if (text==="green"){
        document.getElementById("header").style.color = "green";
    }
} statements if else if else like previous lesson about Statements*/
function pressed(){
    const text = document.getElementById("inp").value;
    switch (text){
        case "red":
            document.getElementById("header").style.color ="red";
            break;
        case "green":
            document.getElementById("header").style.color ="green";
            break;
        case "blue":
            document.getElementById("header").style.color ="blue";
            break;
        default:
            document.getElementById("header").style.color = "black";
            break;
    }
}