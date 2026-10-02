const str = "Hello, World!";

console.log(str.length); // Output: 13

console.log(str[0]); // Output: H
console.log(str.charAt(7)); // Output: W
console.log(str.indexOf("World")); // Output: 7

console.log(str.slice(0, 5)); // Output: Hello
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!

const str2 = "   JavaScript   ";
console.log(str2.trim()); // Output: JavaScript

const str3 = "I love JavaScript";
console.log(str3.replace("JavaScript", "coding")); // Output: I love coding

const str4 = "apple, banana, cherry";
console.log(str4.split(", ")); // Output: [ 'apple', 'banana', 'cherry' ]