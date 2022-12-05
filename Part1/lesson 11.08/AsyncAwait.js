// async function example

async function myasync() {
    console.log('Async function.');
    return Promise.resolve(1);
}

myasync().then(alert);
///the async keyword is used before the function to represent that the function is asynchronous.


// a promise

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Promise resolved')}, 4000);
});

// async function
async function asyncFunc() {

    // wait until the promise resolves
    let result = await promise;

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();


//Error handling
function thisThrows() {
    throw new Error("Thrown from thisThrows()");
}

try {
    thisThrows();
} catch (e) {
    console.error(e);
} finally {
    console.log('We do cleanup here');
}

// Output:
// Error: Thrown from thisThrows()
//   ...stacktrace
// We do cleanup here