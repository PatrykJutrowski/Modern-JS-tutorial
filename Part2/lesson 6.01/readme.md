<h1>Mutation observer</h1>

<h3> in this tutorial, you will learn how to use the JavaScript MutationObserver API to watch for changes being made to the DOM tree.</h3>

<p>Introduction to the JavaScript MutationObserver API</p>
<p>The MutationObserver API allows you to monitor for changes being made to the DOM tree. When the DOM nodes change, you can invoke a callback function to react to the changes.</p>

<h5>How To Use Mutation Observer:</h5>
<h6>Step 1:</h6>
    1) Create a callback function that will execute DOM Changes.</br>
    
<h6>Step 2:</h6>
   1) Create an Observer instance and pass it to the callback function.</br>
   2) Here, We will use the MutationObserver() constructor to create an object.

        let observer = new MutationObserver(callback);
        
<h6>Step 3:</h6>
    1) Next call observe() function to observe DOM changes.
    
          observer.observe(targetNode, Config);
<h6>Step 4:</h6>
    1) pass in the target node and configuration
    
        observer.observe(targetNode, config);
        
        
<a href ="https://javascript.info/mutation-observer">Mutation observer <==</a>
