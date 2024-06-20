//Data Types

//Primitive Data Types

// 7 types: String, Number, Boolean, null, undefined, symbol, Bigint


//Non- Primitive or Reference type

//Array, Object, functions

// const score = 100
// const scoreValue = 100.3;

// const isloggesIn = false;
// const outSideTemp = null;
// let userEmail;


//Symbol

// const Id = Symbol('1234');
// const anotherId = Symbol('1234');
// console.log(Id == anotherId);

// const bigNumber = 234534567856455686754n;

//Array

// const superHeros = ["Sandeep", "Tanya", "Love"];
// console.log(superHeros);

//Object

// let myObject = {
//     Name: "Sandeep",
//     Age: 24,
//     Love: "Tanya",
//     Height: 174,
// }
// console.log(myObject);

//Function
//Storing in a variable

// let myFunction = function(){
//     console.log("Hello Jee");
// }
// myFunction(); //Function Call



//********************* How Memory Works *******************//

//Stack(Primitive),   //Heap(Non-primitive)

let myName = "SandeepKumar";  //primitive hai

let myAnotherName = myName;
myAnotherName = "Tanya";

console.log(myAnotherName);
console.log(myName);


//Non-Primitive hai
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);