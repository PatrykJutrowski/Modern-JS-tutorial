Javascript Proxy object:

Proxy

The first thing to know is the syntax of proxy, which looks as follows:

let proxy = new Proxy(target, handler)

This syntax includes a target and a handler. The target is the object that is going to be wrapped. It can be functions, and so on. The handler is the configuration of the proxy.

In case there is a trap in the handler, then it runs, and the proxy can handle it. In another way, the operation will be implemented on the target.

Reflect

Reflect is the term used for specifying a built-in object, which simplifies the proxy creation.

As it was noted above, the internal methods such as [[Set]],[[Get]] , and others can’t be called directly. Reflect can be used for making it possible.

Why use a Proxy?

Proxies could be very useful when dealing with performance optimizations. Below are some of the advantages of using proxies:

  1) Routing HTTP requests in web applications are possible with Proxy. This way, you can be able to have more control over the traffic,
  2) With Proxy, you can implement encapsulation easily allowing you to create private properties,
  3) With Proxy, encapsulation can be implemented easily, hence developers can prevent/control access to a resource that is too expensive to create and also prevent incorrect or malicious use of the resource.

Why use Reflect?

  1) While the Reflect and Proxy objects were designed in tandem and complement each other, the Reflect object can also be used alone to simplify JavaScript operations. Here are some examples of why you should use the Reflect object.

Reflect allows you to simplify function operations. For instance, in JavaScript ES5, if you want to call a function a with a variable number of arguments packed as an array args, binding the this value to obj, you can simply write:
a.apply(obj, args)


https://javascript.info/proxy
