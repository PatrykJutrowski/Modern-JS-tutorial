In this tutorial, you'll learn about the BigInt type which is the built-in object that can represent whole numbers lagrger than 2 to the power of 53 – 1.

The BigInt is a new primitive type that can represent whole numbers bigger than 2 to the power of 53 - 1, which is the largest number Javascript can reliably represent with the number type.
Append n to a literal integer or use BigInt() function to create a bigint.

Usage Recommendation: The following applications are not recommended to be used with BigInt due to its implementation:

  1) Coercion: Coercing between Number and BigInt can lead to loss of precision, it is recommended to only use BigInt when values greater than 253 are reasonably expected and not to coerce between the two types.
  2) Cryptography: The operations supported on BigInt are not constant time. BigInt is therefore unsuitable for use in cryptography.

https://javascript.info/bigint
