let x = 6;
let y = 3;

document.getElementById("demo").innerHTML =
    (x < 10 && y > 1) + "<br>" +
    (x < 10 && y < 1);

let z = 10;
let c = 5;
document.getElementById("demo1").innerHTML =
    (z === 6|| c === 6) + "<br>" +
    (z === 10 || c === 5) + "<br>" +
    (z === 10 || c === 5);