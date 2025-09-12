function x(y) {
    console.log("This is x, completed");
    y();    
}
function y() {
    console.log("This is y, completed");
}
x(y);

