// ===============================
// Output Methods in JavaScript
// ===============================

// console.log() => Normal message print karne ke liye
// console.log("Welcome to JavaScript");

// console.error() => Error message dikhane ke liye
// console.error("ATM card PIN is wrong");

// console.info() => Important information dikhane ke liye
// console.info("This is an important message");


// ===============================
// Variables in JavaScript
// ===============================

// 1. var (Old Approach)

// var ko redeclare aur reassign dono kar sakte hain.

// var a = "Aasif";
// console.log(a);

// var a = 10;      // Redeclare ✅
// console.log(a);

// a = 12.12;       // Reassign ✅
// console.log(a);


// ===============================
// 2. let
// ===============================

// let ko reassign kar sakte hain,
// lekin same scope me redeclare nahi kar sakte.

// let a = 12;
// console.log(a);

// a = "Aasif";     // Reassign ✅
// console.log(a);

// let a = 12.2;    // Redeclare ❌
// console.log(a);

// Error:
// SyntaxError: Identifier 'a' has already been declared

// Note:
// let variable ko reassign kar sakte hain,
// lekin same scope me redeclare nahi kar sakte.


// ===============================
// 3. const
// ===============================

// const ko declare karte waqt value deni zaroori hoti hai.

// const a = 1212;
// console.log(a);

// a = "Aasif";     // Reassign ❌
// console.log(a);

// const a = 100;   // Redeclare ❌

// Note:
// const variable ko na reassign kar sakte hain
// aur na hi redeclare kar sakte hain.


// ===============================
// Summary
// ===============================

// var   => Redeclare ✅  Reassign ✅
// let   => Redeclare ❌  Reassign ✅
// const => Redeclare ❌  Reassign ❌

// ===============================
// Q two type datatype hai
// ===============================
// Primitive data types only store a single value.

// 1. Number
let age = 21;
console.log(age)                      //21
console.log(typeof(age))              //number
console.log(typeof age.toString())    //number to change string

// 2. String
let name = "Aasif";
console.log(name)                      //aasif
console.log(typeof(name))              //string

// 3. Boolean
let isStudent = true;
console.log(isStudent)                      //true
console.log(typeof(isStudent))              //boolean

// 4. Undefined
let city;
console.log(city)                      //undefined
console.log(typeof(city))              //undefined

// 5. Null
let car = null;
console.log(car)                      //null
console.log(typeof(car))              //object

// 6. BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber)                      //12345678901234567890n
console.log(typeof(bigNumber))              //bigint

// 7. Symbol
let id = Symbol("id");
console.log(id)                     
console.log(typeof(id))              

// ===================================================================
// Non-primitive data types can store multiple values or complex data.
// ===================================================================
// 1. Object
let person = {
    name: "Aasif",
    age: 21
};

// 2. Array
let fruits = ["Apple", "Mango", "Banana"];

// 3. Function
function greet() {
    console.log("Hello Aasif");
}

      //Operators
//1. Arithmetic Operators=> +, -, * , /, %
let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus (Remainder)

// 2. Assignment Operators => = , *= ,-=
let x = 10; // = Assignment Operator
x += 5; 
console.log(x); // 15

// 3. Comparison Operators => ==,===,!=
let item1 = 5;
let item2  ="5"
console.log(item1 == item2)   //true
console.log(item1 === item2)  //false


// 4. Logical Operators =>&&,||,!
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

