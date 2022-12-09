This chapter will be about Mouse Events : 

What is a mouse event in JavaScript?

The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include click , dblclick , mouseup , mousedown . MouseEvent derives from UIEvent , which in turn derives from Event .

  1) DOM Level 3 defines nine mouse events,
  2) Use addEventListener() method to register a mouse event handler,
  3) The event.button indicates which mouse button was pressed to trigger the mouse event,
  4) The modifier keys: alt, shift, ctrl, and meta (Mac) can be obtained via properties of the event object passed to the mouse event handler,
  5) The screenX and screenY properties return the horizontal and vertical coordinates of the mouse pointer in screen coordinates,
  6) The clientX and clientY properties of the event object return horizontal and vertical coordinates within the application’s client area at which the mouse event occurred.


https://javascript.info/mouse-events-basics
