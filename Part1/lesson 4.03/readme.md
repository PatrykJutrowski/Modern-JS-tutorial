Today we will talk about garbage collection : 
What is the concept of Garbage Collection?
Garbage collection (GC) is nothing but collecting or gaining memory back which has been allocated to objects
but which is not currently in use in any part of our program.
So Javascript is a high level language so  you dont need to allocate memory 
memory allocation and releasing happens automatically 
making the memory free is the process of "GC" Garbage collection and also process called automatic management with reference to JS 
The GC tries to release memory when location is not reachable 
for example when we create an obj like
let obj= {name:"john"}
let obj = null
so obj has a reference  to name and this name has a value as a string 
when obj is null the reference is canceled so name doesnt have any reference now thats why we calls it not reachable
summary so as long as references are allocated there will be not  any cleaning or garbage collecting.
https://javascript.info/garbage-collection
