console.log("Using let and reassigning variable but not using let inside if statement")
// This is a simple JavaScript file that declares a variable and assigns it a value.
let x = 5;

// Create a new variable that adds 10 to x and prints the result.
// Using Operation
let simplecalculation = x + 10;

// Check if x is greater than 3 and if so, reassign it to 10 and print the new value.
if (x > 3) {
    x=10;
}

// Print the value of x and the result of the simple calculation.
console.log(x); // -> in this console.log x Changing because of if statement

// Print the result of the simple calculation.
console.log(simplecalculation); // -> in this console.log simplecalculation is not changing because it is assigned before the if statement and it is not affected by the change of x after the if statement.

// Now i want use var instead of let and see the difference

console.log("Using var and reassigning variable but not using var inside if statement")

var y = 5;

var simplecalculation2 = y + 10;

if (y > 3) {
    y = 10;
}   

console.log(y); // -> in this console.log y Changing because of if statement
console.log(simplecalculation2); // -> in this console.log simplecalculation2 is not changing because it is assigned before the if statement and it is not affected by the change of y after the if statement.

// Okey var and let are both used to declare variables in JavaScript, but they have some differences.
// let we using let/var again in if statement it will create a new variable with the same name and it will not affect the outer variable, but var will reassign the value of the outer variable if we use it again in if statement.

// This is a simple JavaScript file that declares a variable and assigns it a value.
let w = 5;

// Create a new variable that adds 10 to x and prints the result.
// Using Operation
let simplecalculation3 = w + 10;

console.log("Using let and reassigning variable but using let inside if statement")

// Check if x is greater than 3 and if so, reassign it to 10 and print the new value.
if (w > 3) {
    let w=10;
}

// Print the value of x and the result of the simple calculation.
console.log(w); // -> in this console.log  Changing because of if statement

// Print the result of the simple calculation.
console.log(simplecalculation3); // -> in this console.log simplecalculation is not changing because it is assigned before the if statement and it is not affected by the change of x after the if statement.

// Now i want use var instead of let and see the difference

console.log("Using var and reassigning variable but using var inside if statement")

var c = 5;

var simplecalculation4 = c + 10;

if (c > 3) {
    var c = 10;
}   

console.log(c); // -> in this console.log c Changing because of if statement
console.log(simplecalculation4); // -> in this console.log simplecalculation4 is not changing because it is assigned before the if statement and it is not affected by the change of c after the if statement.

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
