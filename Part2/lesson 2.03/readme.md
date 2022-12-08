What is event delegation in JavaScript?

Event delegation is one of the most potent events handling patterns. It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector.

The main steps involve:

  1) Add a handler on a container
  2) Add the event.target source element on the handler
  3) Handle the event

Similarly, handlers can be applied to multiple elements throughout the document. Event delegation helps you to avoid redundant code and makes it shorter and easier to read.

https://javascript.info/event-delegation
