Introduction to browser events :
How do browser events work?

Whenever a user interacts with the page, this action is considered an event. An example of an event can be a click, a hover, a page load, a keypress, and many others things. Working with events is a large part of creating interactivity on your page.

Listening for Events

To perform an action when an event triggers, you first need to listen to it. Listening to an event is basically telling the browser "hey, when this event occurs, I want to execute this piece of code".
That piece of code is packaged in the form of a function called the callback function, and is provided to the browser.
The browser now listens for the event and once it occurs it will run the callback function, doing whatever it is that you want to happen.

Event handlers

The change in the state of an object is known as an Event. In html, there are various events which represents that some activity is performed by the user or by the browser. When javascript code is included in HTML, js react over these events and allow the execution. This process of reacting over the events is called Event Handling. Thus, js handles the HTML events via Event Handlers.
  1) HTML attribute: onclick="...".
  2) DOM property: elem.onclick = function.
  3) Methods: elem.addEventListener(event, handler[, phase]) to add, removeEventListener to remove.

https://javascript.info/introduction-browser-events
