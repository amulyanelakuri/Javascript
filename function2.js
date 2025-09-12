// Function without parameters and without Return values;
function ola() {
    console.log("Namsakaram!!...");
}
ola();
// Function with parameters and without Return values;
function olaPerson(name) {
    console.log("Namsakaram," + name + "!!...");
}
olaPerson("Shinchan");
olaPerson("Doraemon");

//Function without parameters but with return values;
function Year() {
    return new Date().getFullYear();
}
let currentYear = Year();
console.log(currentYear);
console.log(Year());

//Function with parameters and with return values;

function add(a,b) {
    return a + b;
}
let sum = add(2,5);
console.log(sum);
console.log(add(10,20));

// Function expression  
const multiply = function(x, y) {
    return x * y;
}   
console.log(multiply(5, 6));
console.log(multiply(10, 20));  

// Function inside an object
const person = {
    firstName: "Shinchan",
    lastName: "Nohra",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }   
};
console.log(person.fullName());
console.log(person.firstName);
console.log(person.lastName);

