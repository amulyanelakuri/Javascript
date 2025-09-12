// Array declaration 
let numbers = [99,999,9999,9];
console.log(numbers[2]);

// Adding elements

let num = [1,3,5];
// Directly adding elements specified index;
num[3] = 7;
// push willbe add the elements at the end of the array;
num.push(2);
console.log(num);
// unshift add the element at the beginning of the array;
num.unshift(7);
console.log(num);

// Removing elements
let flowers = ["Lotus","Hibscus", "dandelion"];
// remove last elements
flowers.pop();
console.log(flowers);
// remove first elements
flowers.shift();
console.log(flowers);
// remove elements from specific index and adding
flowers.splice(0,1,"Rose");
console.log(flowers);

// Modifying elements and accessing elements
let num1 = [0,1,2,3,4,5,6,7,8,9];
console.log(num1[1]);

num1.splice(1,3,4);
console.log(num1);

let digits = [0,1,2,3,4,5,6,7,8,9];
let part = digits.slice(0,5);
console.log(part);

// Array searching and sorting
let veggies = ["Drumstic", "Brinjal", "Tamato", "Mirchi"];
console.log(veggies.indexOf("Brinjal"));
console.log(veggies.includes("Tamato"));
console.log(veggies.sort());
console.log(veggies);
veggies.reverse();
console.log(veggies);

//Arrays Iteration Method
let f = ["Apple", "Banana", "Mango", "Orange"];
f.forEach(f => console.log(f));

let numbers1 = [1,2,3,4,5];
let square = numbers1.map(x => x * x);
console.log(square);

let even = numbers1.filter(x => x % 2 ===0);
console.log(even);

let sum = numbers1.reduce((x,y) => x + y);
console.log(sum);

let a1 = [1,2,3];
let a2 = [4,5,6];
console.log(a1.concat(a2));

let words = ["nanne", "nannau", "nayana"];
console.log(words.join("-"));

//ARRAY DESTRUCTURING
let song = ["oye", "hamaso", "Rakita"];
let [s1,s2,s3] = song;
console.log(s1);
console.log(s2);
console.log(s3);