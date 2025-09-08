let a = 10;
let b = 5;
console.log("Arithmetic operator");

console.log(a+b);//15
console.log(a-b);//5
console.log(a*b);//50
console.log(a/b);//2
console.log(a%b);//0        
console.log(a**b);//100000000
console.log("<br>");

console.log("Assignment operators");
console.log(a+=5);
console.log(a-=5);
console.log(a*=5);
console.log(a/=5);
console.log(a%=5);
console.log(a**=5);
console.log("<br>");

console.log("Camparison operators");
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log("<br>");

console.log("Logical operators");
console.log(a>b && a<b);
console.log(a>b || a<b);
console.log(! (a>b && a<b));
console.log("<br>");

console.log("Conditional (ternary) operator");
let x = 20;
let canVote = (x >= 18) ? "Eligible" : " Not Eligible";
console.log(canVote);
console.log("<br>");

console.log("Type operators");
console.log(typeof a);
console.log(typeof "Hello");
console.log([1,2,3] instanceof Array);;

