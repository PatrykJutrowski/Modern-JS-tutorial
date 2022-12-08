DOM Nodes - Walking the DOM

According to the W3C HTML DOM standard, everything in an HTML document is a node:

  1) The entire document is a document node
  2) Every HTML element is an element node
  3) The text inside HTML elements are text nodes
  4) Every HTML attribute is an attribute node (deprecated)
  5) All comments are comment nodes

With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.

New nodes can be created, and all nodes can be modified or deleted.

Node Relationships
The nodes in the node tree have a hierarchical relationship to each other.

The terms parent, child, and sibling are used to describe the relationships.

  1) In a node tree, the top node is called the root (or root node)
  2) Every node has exactly one parent, except the root (which has no parent)
  3) A node can have a number of children
  4) Siblings (brothers or sisters) are nodes with the same parent


https://javascript.info/dom-navigation
