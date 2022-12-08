Searching: getElement*, querySelector* etc.

What is the use of document get element by ID in JavaScript?

The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

What is querySelectorAll in JavaScript?

Document.querySelectorAll() The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors

What is a querySelector in JavaScript?

The querySelector() is a method of the Element interface. The querySelector() method allows you to select the first element that matches one or more CSS selectors.

There are 4 methods getElementsBy* to look for a specific elements by:
  1) Tag name elem.getElementsByTagName(tag)
  2) class name/ class="class" elem.getElementsByClassName(className)
  3) and by name document.getElementsByName(name)
  4) by id 

All methods "getElementsBy*" return a live collection.

https://javascript.info/searching-elements-dom
