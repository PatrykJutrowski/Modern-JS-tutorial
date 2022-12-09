Drag'n'Drop with mouse events 


The principal drag and drop algorithm looks as follows:

  1) On the mousedown, you need to arrange the element for moving, if it is necessary ( for example, you can create its copy).
  2) On the mousemove, you should move it by changing the left/top, as well as position:absolute.
  3) On the mouseup, implement the overall actions connected to a finished drag and drop.

In this chapter, we considered the basic algorithm for drag and drop. The interface of drag and drop allows applications to apply the drag and drop features on different browsers. The user can select a draggable element with the mouse, drag it to a droppable element, dropping it by releasing the mouse button.

For websites, extensions and so on, there is an option of customizing, which elements can become draggable, the type of feedback they produce. Also, there are frameworks building architecture on it: for example, DragZone, Droppable, Draggable, and other classes. Most of them act similarly to what was described above.

https://javascript.info/mouse-drag-and-drop
