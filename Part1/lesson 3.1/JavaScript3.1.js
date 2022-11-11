let x = 1;

const doClick = () =>{
    x = 4;
    debugger;
    console.log('the debugger is enabled');
    x = 7;
};
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.addEventListener('click', doClick);
});


doClick();
/* Firstly we have to inspect our body, then we have o check if our debugger is paused or not
we will see a little window that tell us we can resume script execution or move to the next line
That's all you need to know
And everytime you click on the body, debugger will start working. 
 */