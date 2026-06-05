// ==================================================
// Hosting or Closures-Lexical_Environment-scope_Chian
// ===================================================


// =====================
// Hoisting
// =====================

// Hoisting => Hoisting JavaScript ka behavior hai jisme variable aur function declaration
// ko execution se pehle unke scope ke top par move kiya hua maana jata hai.

// 1. var
console.log(a); // undefined
var a = 20;

// var hoist hota hai aur undefined se initialize ho jata hai.


// 2. let
console.log(b); // ReferenceError
let b = 12;

// let hoist hota hai,
// lekin initialize nahi hota.
// TDZ (Temporal Dead Zone) ki wajah se error aata hai.


// 3. const
console.log(c); // ReferenceError
const c = 25;

// const bhi hoist hota hai,
// lekin initialize nahi hota.
// TDZ ki wajah se error aata hai.


// =====================
// Shortcut
// =====================

// var   => Hoisted + undefined
// let   => Hoisted + TDZ + ReferenceError
// const => Hoisted + TDZ + ReferenceError



// Closure
// Jab ek inner function apne outer function ke variables ko
// yaad rakhta hai aur use kar sakta hai,
// even outer function ke execute hone ke baad bhi,
// use Closure kehte hain.

function outer(){
    let count=0;

    function innerh(){
        count++;
        console.log(count)
    }
    return innerh
}
const counter =outer();
counter();
counter();
counter();


