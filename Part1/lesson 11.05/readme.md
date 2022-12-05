Promises API:
There are 6 static methods of Promise class:
  1) resolve(value : Object) : Promise
  Returns a new Promise that is in the resolved state with value as the resolved value. Useful for passing values to APIs that expect promises.
  
  2) race(promises : Iterable<Promise>) : Promise
Creates a new Promise that will be resolved when the first of promises is resolved. If a promise is rejected before any resolve, the returned Promise will be rejected immediately and will provide the value of the Promise that was rejected.
  3) all(promises : Iterable<Promise>) : Promise<Array>
Creates a new Promise that will be resolved when all of promises are resolved. If any of the promises are rejected, the returned Promise will be rejected immediately and will provide the value of the Promise that was rejected. 
  4) reject(error : Error) : Promise
Returns a new Promise that is in the rejected state with error as the rejected error. Useful for passing values to APIs that expect promises.
  5) any(promises : Iterable<Promise>) : Promise
Creates a new Promise that will be resolved when the first Promise it promises resolves. If all of promises are rejected, the returned promise will be rejected with an AggregateError containing all the rejected values.
  6) allSettled(promises : Iterable<Promise>) : Promise<Array>
Creates a new Promise that will be resolved when all of promises are resolved or rejected. The result of the promise is an Array containing objects with a status property (containing either 'fulfilled' or 'rejected') and either a value property (for fulfilled promises) or reason property (for rejected promises).
  
  https://javascript.info/promise-api
