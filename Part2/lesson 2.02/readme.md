What is event Bubbling  in JavaScript?

Event bubbling is the order in which event handlers are called when one element is nested inside a second element, and both elements have registered a listener for the same event (a click, for example). With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

What is Event Capturing in JavaScript?

Event capturing is the event starts from top element to the target element. It is the opposite of Event bubbling, which starts from target element to the top element.

Clicking on the p element calls the click event handlers of all parent elements, starting from the outer and propagating inside to the target element p:
html → body → article → div → p.

https://javascript.info/bubbling-and-capturing
