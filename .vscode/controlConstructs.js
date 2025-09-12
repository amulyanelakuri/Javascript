let  age = 18;

if(age >= 18) {
    console.log("You are eligible to vote");
}
else if(age < 18 && age > 0) {
    console.log("You are not eligible to vote");
}
else {
    console.log("Invalid age");
}

// Switch case
let day = 7;
switch(day) {
    case 1:
        console.log("Monday");
        break;
        case 2:
            console.log("Tuesday");
            break;  
        case 3:
            console.log("Wednesday");
            break;
               
        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day");
}

// For Loop
for(let i =0;i<=6;i++) {
    console.log(i);
}
// While Loop
let count = 0;
while (count < 5) {
    process.stdout.write(count + ' ');
    count++;
}

// Do While Loop
let num = 0;
do {
    console.log(num);
    num++;
}
while(num < 5);
