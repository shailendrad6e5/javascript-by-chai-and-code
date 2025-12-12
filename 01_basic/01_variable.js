// Variables in JavaScript are like containers that hold information.
// You can create a variable using the keywords:
// var, let, or const.

var message = "Hello, World!"; // 'var' is function-scoped and can be redeclared.
let count = 10;
const pi = 3.14; // 'const' is block-scoped and cannot be reassigned.

// Example of creating a variable:

let age = 25; // Here, 'age' is the variable name and '25' is the value it holds.

// You can change the value of a variable created with 'let' or 'var':
age = 26; // Now, 'age' holds the value 26.

// If you use 'const', you cannot change its value:
const birthYear = 1998; // 'birthYear' will always be 1998.

// You can also create variables without assigning a value initially:
let name; // 'name' is declared but has no value yet.
name = "John"; // Now, 'name' holds the value "John".

//what is block scope and function scope?
//block scope ka matlab hai ki jo variable aapne kisi block (jaise ki if statement, for loop, etc.) ke andar declare kiya hai, wo sirf usi block ke andar hi accessible hota hai. Agar aap us variable ko block ke bahar access karne ki koshish karenge, to error aayega.

//function scope ka matlab hai ki jo variable aapne kisi function ke andar declare kiya hai, wo sirf usi function ke andar hi accessible hota hai. Agar aap us variable ko function ke bahar access karne ki koshish karenge, to error aayega.

/*
prefer not to use var
because of issue in block scope and function scope
*/