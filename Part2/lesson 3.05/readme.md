JavaScript keyboard events

There are three different keyboard events in JavaScript:

  1) keydown: Keydown happens when the key is pressed down, and auto repeats if the key is pressed down for long.
  2) keypress: This event is fired when an alphabetic, numeric, or punctuation key is pressed down.
  3) keyup: Keyup happens when the key is release

KeyboardEvent sequence

KeyboardEvent events are fired in the following order:

  1) The first event is the keydown event. If a key that produces a character key which is held further, then the event is repeated.
  2) If the keypress event is supported, it is fired next and repeated while the key is pressed down.
  3) The last event is the keyup event. It is fired when the key is released.

Handling keyboard events in JavaScript

The Event object is the parent of all event objects. Some of the commonly used event objects are TouchEvent, KeyboardEvent, InputEvent, ClipboardEvent, WheelEvent, and MouseEvent.

https://javascript.info/keyboard-events
