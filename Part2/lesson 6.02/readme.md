<h1>JavaScript DOM Ranges and Selection</h1>

<h3>Range</h3>

<p>The Range interface represents a fragment of a document that can contain nodes and parts of text nodes</br>
A range can be created by using the Document.createRange() method. Range objects can also be retrieved by using the getRangeAt() method of the Selection object or the caretRangeFromPoint() method of the Document object.</br>
There also is the Range() constructor available.

<h3>Selection</h3>

<p>A Selection object represents the range of text selected by the user or the current position of the caret. To obtain a Selection object for examination or manipulation, call window.getSelection().</br>
A user may make a selection from left to right (in document order) or right to left (reverse of document order).</br> The anchor is where the user began the selection and the focus is where the user ends the selection. </br>If you make a selection with a desktop mouse, the anchor is placed where you pressed the mouse button, and the focus is placed where you released the mouse button.</p>


<a href="https://javascript.info/selection-range">Range and Selection</a>
