function greet() {
    console.log("I should want contempation on my work!!");
}
greet();
function user(name) {
    console.log("Hello " + name);
}
user("Steev");

// arrow function
const squre = x => x * x;
console.log(squre (5));
console.log(squre(10));

// arrow function with multiple parameters
const multiyply = (a, b) =>
{
    return a * b;
}
console.log(multiyply(5, 6));
console.log(multiyply(10, 20));

// arrow function with no parameters
const hello = () => "Hello World";
console.log(hello());

// Example
const isOdd = (num) => num % 2 !== 0;
console.log(isOdd(5));
console.log(isOdd(4));