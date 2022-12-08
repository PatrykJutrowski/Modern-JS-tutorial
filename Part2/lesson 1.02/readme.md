Today we have a DOM tree

How is DOM constructed?

 DOM contains a bunch of nodes where each node represents an HTML element. The <HTML> tag always comes at the top and hence is called the “root node”. The rest of the nodes come under it and hence are called “children nodes”.
  
How do you make a DOM in JavaScript?
To create a DOM element, you use the createElement() method.
  1) const element = document.createElement(htmlTag); ...
  2) const e = document.createElement('div'); ...
  3) e.innerHTML = 'JavaScript DOM'; ...
  4) document.body.appendChild(e); ...
  5)const/let textnode = document.createTextNode('JavaScript DOM'); e.appendChild(textnode);
  
  What structure does DOM use?
  1) tree
  
  What is meant by DOM tree?
  
The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. The DOM represents a document with a logical tree
  
  https://javascript.info/dom-nodes
