// Primitive Data Types
console.log("Number");
let a = 10;
let b = 12.23;
console.log(b);
console.log(typeof b);
console.log(a);

console.log("String");
let nam = " Kumari";
let greet = `Hello, ${nam}!`;
console.log(nam);
console.log(greet);
console.log(typeof nam);

console.log("Boolean");
let isOpen = true;
console.log(isOpen);

console.log("Undefined");
let undef;
console.log(undef);
console.log(typeof undef);

console.log("Null");
let emp = null;
console.log(emp);
console.log(typeof emp); // Note: This will show 'object' due to a quirk in JavaScript


// Non-Primitive Data Types
console.log("Object");
let person = {
    name: "will",
    age: 12
};
console.log(person);
console.log(typeof person);

console.log("Array");
let fruits = ["Guva", "Mango", "Orange"];
console.log(fruits);
console.log(typeof fruits); // Note: This will show 'object' because arrays are a type of object in JavaScript

console.log("Function");
function add(x, y) {
    return x + y;
}   
console.log(add(5, 3));
console.log(typeof add);

