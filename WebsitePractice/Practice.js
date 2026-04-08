/*console.log("Hello");
console.log("These are very similar to print statements")

window.alert("Test");
window.alert("This is a alert");

//this is a comment

This
is
a
multi-line
comment 


document.getElementById("MyH1Tag").textContent = "Hello";
document.getElementById("MyPTag").textContent = "Testing";

 Variables Number values

let NumberValue = 100;
let SmallerNumber;
SmallerNumber = 10


console.log(NumberValue)
console.log(SmallerNumber)

let age = 17;
let SalePrice = 18;
let Number = 5;

console.log(typeof age)
console.log(`You are ${age} years old`)
console.log(`The sales price is $${SalePrice} and that's not changing`)
console.log(`The random number is: ${Number}`)

 Variables Strings

let FirstName = "Zachary";
let Thought = "Random String";
let Code = "JavaScript";
let Email = "ExampleEmail@gmail.com"

console.log(`Your name is ${FirstName} and additionally this is a ${Thought}`)
console.log(`You are coding in ${Code}`)
console.log(`Your email is ${Email}`)

 Bolean Values

let Online = true;
let Offline = false;

let ForSale = false;


console.log(`Are you online?: ${Online}`);
console.log(`Are you offline?: ${Offline}`)

console.log(`Is this for sale?: ${ForSale}`)


let FullName = "Zachary Baca";
let Age = 18;
let Student = true;

document.getElementById("p1").textContent = `Your name is ${FullName}`;
document.getElementById("p2").textContent = `Your age is ${Age}`;
document.getElementById("p3").textContent = `You are a student ${Student}`;
*/

//let students = 30;
//let NumberGroups = 4;


//students = students + 1;
//students = students - 1;
//students = students * 2
//students = students / 2
//students = students ** 2
//let extraStudents = students % NumberGroups;

//students += 2;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//tudents %= 2;
//let ExtraStudents = students **= NumberGroups;
//students++;
//students--;

//console.log(students);
//document.getElementById("p1").textContent = `We have ${students} students today`;

/*
    Operator Precedence
    1. Parenthesis ()
    2. Exponents
    3. Multiplication and Division and Modulo
    4. Addition and Subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 23;

//let result = 12 % 5 + 8 / 2;
//let result = 6;

//let result = 6 / 2 ** (2 + 5);
//let result = 0.46875;


//console.log(result)

// How to accept user input

// 1. Easy Way = Window Prompt
// 2. Professional Way = HTML Textbox

/* Window Prompt

let Username;

Username = window.prompt("What's your username?");

console.log(Username);

console.log(`Hello, ${Username} how are you doing today?`);

*/

// Professional Way

/*let Username;

document.getElementById("MySubmission").onclick = function(){
    Username = document.getElementById("UsersInput").value;
    console.log(Username);
    document.getElementById("MyH1").textContent = `Good to meet you! ${Username}`;
}
*/

// type conversion = change the datatype of a value to another
//                          (strings, numbers, boleans)
// example is like converting a number that is a string value, to a number value

let age = window.prompt("How old are you?");

age = Number(age);

age += 1;

console.log(age);