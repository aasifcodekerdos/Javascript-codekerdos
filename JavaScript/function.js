// ===================
// FUNCTIONS IN JAVASCRIPT
// ===================

// Function:
// Function ek block of code hota hai jise hum ek baar define karke
// multiple times call (use) kar sakte hain.

// 1. Function Declaration (Named Function)
function sayHi() {
    console.log("Welcome to JavaScript");
}
sayHi();


// 2. Function Expression
const hiSay = function () {
    console.log("Welcome to Aasif");
};
hiSay();


// 3. Arrow Function (ES6)
// this keyword ka apna context nahi hota
const item = () => {
    console.log("Welcome to JS");
};
item();


// 4. Anonymous Function
setTimeout(function () {
    console.log("Anonymous Function");
}, 2000);


// 5. IIFE (Immediately Invoked Function Expression)
// Define hote hi turant execute ho jata hai
(function () {
    console.log("IIFE Function");
})();


// 6. Async Function
// async function hamesha Promise return karta hai
async function fetchData() {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await res.json();
    console.log(data);
}
fetchData();


// 7. Constructor Function
// Object create karne ke liye use hota hai
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const student1 = new Person("Aasif", 23);
const student2 = new Person("Eva", 24);

console.log(student1);
console.log(student2);


// 8. Callback Function
// Ek function jo dusre function ko argument ke roop me diya jata hai
function callbackFunc(name, callback) {
    console.log("Hello", name);
    callback();
}

function bye() {
    console.log("Good Bye");
}

callbackFunc("Aasif", bye);


// 9. Recursive Function
// Jo function khud ko call karta hai
function countDown(n) {
    if (n === 0) return;

    console.log(n);
    countDown(n - 1);
}

countDown(5);


// 10. Higher Order Function
// Function ko argument leta hai ya function return karta hai
function greet() {
    console.log("Hello");
}

function higherOrder(callback) {
    callback();
}

higherOrder(greet);