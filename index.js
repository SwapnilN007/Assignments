//console.log("Hello World");
//       alert("Hello");
/*let name1 = 'Swapnil';
console.log('Hello', name1);*/

//Object:::---
/*let person = {
    firstName: 'Swapnil',
    age: 25
};
console.log(person);
//Dot Notation
person.firstName = "Shivam";
console.log(person.firstName);
//Bracket Notetion
person['firstName'] = 'Manoj';
console.log(person.firstName);
*/
//Arrays
/*
let selectedColors = ['Red', 'Blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 'green';
console.log(selectedColors);
selectedColors[3] = 2;
console.log(selectedColors);
console.log(selectedColors.length);
*/

//Functions
/*
function welcome() {
    console.log('Hello');
}
welcome();

function wel(name, lastName) {
    console.log('Hello ' + name + " " + lastName);
}
wel('Shivam', 'Ambi');
*/

//Types of Functions
/*
function square(number) {
    return number * number;
}
console.log(square(3));
*/
// OOPS 
/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function() {
        console.log('draw');
    }
};
*/
/*
//Factory Function
function createC(r) {
    return {
        r,
        draw: function() {
            console.log('draw');
        }
    };
}
const circle = createC(1);
//circle.draw();
//Construcor Function
function Circle(radius) {
    console.log('this', this);
    this.radius = radius;
    this.draw = function() {
        console.log("draw1");
    }
}
const another = new Circle(1);
circle.draw(); //display contain from 1st function
another.draw(); //display contain from this function
*/
/*
var person = {
    name1: "John",
    age: 50
};
alert(name1 + " is " + age);
*/
a = '1';
//redeclaring
/*
var b = 1;
console.log(b);
var b = 2;
console.log(b); {
    let b = 4;
    console.log(b);
}
console.log(b);
*/
/*
let x = 2; // Allowed
console.log(x);

{
    let x = 3; // Allowed
    console.log(x);
}

{
    let x = 4; // Allowed
    console.log(x);

}
*/
/*
//Const can chang in block
const x = 2; // Allowed
console.log(x);
//const x = 3; // Not allowed
//x = 3; // Not allowed
//var x = 3; // Not allowed
//let x = 3; // Not allowed

{
    const x = 34; // Allowed
    //   const x = 3; // Not allowed
    //  x = 3; // Not allowed
    //    var x = 3; // Not allowed
    //    let x = 3; // Not allowed
    console.log(x);
}
console.log(x);
*/

//Add 2 to every array element

var numbers = [1, 2, 3, 4];
var output = numbers.map(myFunction);
console.log(output);

function myFunction(num) {
    return num + 2;
}




//Get unique value from string

function unique_char(str1) {
    var str = str1;
    var output1 = "";
    for (var x = 0; x < str.length; x++) {
        if (output1.indexOf(str.charAt(x)) == -1) {
            output1 += str[x];
        }
    }
    return output1;
}
console.log(unique_char("abdcaabcd"));