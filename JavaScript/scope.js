// ===============================
// SCOPE
// ===============================

// Scope = Variable ka wo area jahan tak usse access kiya ja sakta hai.

// 1. Global Scope
// Global scope me declare kiya gaya variable file ke kisi bhi part se access ho sakta hai.

// 2. Local Scope (Block Scope)
// Local scope me declare kiya gaya variable sirf us block {} ya function ke andar access ho sakta hai.


// Example

let x = "Aasif"; // Global Scope

function test() {
    let y = 23; // Local Scope

    console.log(x);
    console.log(y);
}

test();


// ===============================
// CONDITIONAL STATEMENTS
// ===============================

// Conditional statements ka use decision lene ke liye kiya jata hai.

// 1. if
// 2. if...else
// 3. if...else if...else

let marks = 88;

if (marks >= 89) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}


// ===============================
// SWITCH CASE
// ===============================

// Switch case ka use multiple conditions ko handle karne ke liye kiya jata hai.

let day = 2;

switch (day) {
    case 1:
        console.log("Sunday");
        break;

    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


// ===============================
// LOOPS
// ===============================

// Loops ka use kisi task ko baar-baar repeat karne ke liye kiya jata hai.

// 1. For Loop

for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}


// 2. While Loop

let i = 1;

while (i <= 5) {
    console.log("While Loop:", i);
    i++;
}


// 3. Do While Loop
// Do While loop kam se kam ek baar zaroor execute hota hai.

let j = 1;

do {
    console.log("Do While Loop:", j);
    j++;
} while (j <= 4);


// ===============================
// STRING METHODS
// ===============================

let str = "welcome to javascript";

console.log(str.length);          // String length
console.log(str.toUpperCase());   // Uppercase
console.log(str.toLowerCase());   // Lowercase
console.log(str.includes("java"));// Check substring

if (str.includes("java")) {
    console.log("Yes, Java is present.");
} else {
    console.log("Java is not present.");
}

console.log(str.replace("javascript", "codekerdos"));
console.log(str.slice(0, 7));


// ===============================
// == VS ===
// ===============================

// ==  => Sirf value compare karta hai.
// === => Value aur data type dono compare karta hai.

let x1 = "5";
let y1 = 5;

if (x1 == y1) {
    console.log("true");
} else {
    console.log("false");
}
// Output: true


let a = "5";
let b = 5;

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}
// Output: false

// ===============================
// Null / Undefined
// ===============================

// Undefined:
// Variable declare hai, lekin value assign nahi hui hai.

// Null:
// Empty value ko intentionally represent karne ke liye developer null assign karta hai.


// undefined
// Undefined ka matlab hai ki variable declare kiya gaya hai,
// lekin usko abhi tak koi value assign nahi ki gayi hai.

let item = 100;
let item2;

console.log(item + item2);

// Output: NaN
// Kyunki item2 ki value undefined hai.


// null
// Null ek intentional (jaan-boojh kar) empty value hai
// jo developer khud assign karta hai.

let item1 = 100;
let item3 = null; // null ki numeric value 0 ki tarah behave karti hai

console.log(item1 + item3);

// Output: 100
// Kyunki 100 + null = 100

// Short Revision Notes
// 1-Scope → Variable kahan tak accessible hai.
// 2-Global Scope → Har jagah access ho sakta hai.
// 3-Local Scope → Sirf function ya block {} ke andar access hota hai.
// 4-if-else → Conditions check karne ke liye.
// 5-switch case → Multiple conditions handle karne ke liye.
// 6-for loop → Jab iterations ki count pata ho.
// 7-while loop → Jab condition true ho tab tak chale.
// 8-do while loop → Pehle execute, baad me condition check.
// 9-String Methods → length, toUpperCase(), toLowerCase(), includes(), replace(), slice().
// 10-== → Value check karta hai.
// 11-=== → Value aur type dono check karta hai.
// 12- undefined=>Undefined ka matlab hai ki variable declare kiya gaya hai, lekin usko abhi tak koi value assign nahi ki gayi hai
// 13-Null=>Null ek intentional (jaan-boojh kar) empty value hai jo developer khud assign karta hai.


// ===============================
// Data Types
// ===============================

// Data Types do type ke hote hain:

// 1. Primitive Data Types
// 2. Non-Primitive (Reference) Data Types


// Primitive Data Types
// Primitive data types ek samay par sirf ek value store karte hain.

// Types:
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol


// Non-Primitive Data Types
// Non-primitive data types multiple values ya complex data store kar sakte hain.

// Types:
// Object
// Array
// Function