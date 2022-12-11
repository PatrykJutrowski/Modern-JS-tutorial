In this episode we will talk about Events: change, input, cut, copy, paste:

  1) Event: change

When the element has finished changing the change event triggers. For text inputs, it indicates that the event triggers when it loses the focus.

  2) Event: input

Every time the user modifies a value, the input event triggers. As opposed to the keyboard events, it can occur on any value change, even those that don’t include keyboard actions (for example, pasting using the mouse or applying speech recognition).

  3) Events: cut, copy, paste


The cut/copy/paste events are the most common ones. They trigger on cutting/copying/pasting a value.
These events are considered a part of the Clipboard event class and are used for providing access to the data that is copied/pasted. For aborting the action, here you can use event.preventDefault() . As a result, nothing will get copied/pasted.

Conclusion : 

In brief, we can notice that the following data change events are commonly used in JavaScript:

  1) the change event: it generally occurs on the focus loss for text input. So, this event triggers when a value was changed.  
  2) the input event: it occurs for text inputs on every change. Unlike the change event, it triggers immediately.
  3) the cut/copy/paste events: these events occur while cutting/copying/pasting a value. Their actions can’t be prevented. The property event.clipboardData allows reading/writing access to the clipboard.

https://javascript.info/events-change-input
