Extending built-in classes
Disadvantages
A lot of people do not recommend extending built-in classes or objects. It is a controversial topic. There are a couple of disadvantages:

ECMAScript may implement its version of the custom method we created. For example, if the next ES version brings in shuffle property to Arrays, we will have a conflict.
Nothing is stopping us from overwriting the functionality of existing methods. For example, I might change the behavior of slice method on Arrays with a custom function. Doing so is not a good practice for an enterprise app as others might be dependent on in-built methods. I would be breaking functionality for a lot of people in the organization.
https://javascript.info/extend-natives
