The dispatchEvent() method of the EventTarget sends an Event to the object, (synchronously) invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

Calling dispatchEvent() is the last step to firing an event. The event should have already been created and initialized using an Event() constructor.

How do I trigger a dispatch event?

To generate an event programmatically, you follow these steps: First, create a new Event object using Event constructor. Then, trigger the event using element. dispatchEvent() method.

Can we create custom events in JavaScript?

We create a custom event using the CustomEvent constructor. This takes two arguments, the first is the name of the event and the second is an object that contains the data. The property name inside the object name should be named detail otherwise it won't work

Summary:

Through the use of the CustomEvent constructor, we can make our own custom events in Javascript.
First we add an event listener onto an element, giving it the name of our custom event and also providing it with a callback function as per usual.
When dispatching the event, we pass in some custom data for the event handler/callback function to use.

https://javascript.info/dispatch-events
