// Higher-Order-Function=>Higher-Order-Function bo function hota hai jo parameter(argument) ka roop me lita hai
// is function ko returen kara skta hai or ek function ko dusra function call kar sakta hai

// HOF function as na argument kar!
function greed(name) {
    return `Hello ${name}`;
}
function processUser(callback) {
    let name = "Aasif"
    console.log(callback(name));
}

processUser(greed);


// HOF function return kar!

function mult(fact) {
    return function (num) {
        return num * fact;
    }
}

const dubal = mult(3);
console.log(dubal(3));


// Callback Function

// Callback Function woh function hota hai jo kisi dusre function ko argument ke roop mein
//  pass kiya jata hai aur baad mein us function ke andar call(execute) kiya jata hai.

function sayhello() {
    console.log("welcme to js")
}

setTimeout(sayhello, 2000)
console.log("asif")


// Real-life Example callback

function fachData(callback) {
    setTimeout(() => {
        console.log("sarver sa data aya hai!")
        callback("data hai")
    },2000)
}

function handelData(data) {
    console.log("welcome to data ",data)
}

fachData(handelData);


// Pure Function
// Pure Function woh function hota hai jo:
// 1. Same input par hamesha same output deta hai.
// 2. Bahar ke data (external variables, API, DOM, etc.) ko change nahi karta.
// 3. Kisi external state par depend nahi karta.

// pure function-->vo function jo hamesha same input pe same output daga and kisi external cheez ko touch na karni(no side effects)'

function add(a,b){
    return a+b;
}
add(2,4)

// Immutability => Data ko direct change nahi kiya jata,
// balki uski copy bana kar usme changes kiye jate hain.
// Original data same rehta hai.
const student ={neame:"asif"}
student.name="bano"
console.log(student.name)

// Good Immutability
const studet1 ={name:"savim"}
const student2 ={...studet1,name:"bajid"}
// console.log(studet1)
console.log(student2)


// Recursion Function => Jab koi function khud ko call kare.

function factr(n){
    if(n === 1) return 1;
    return n*factr(n-1);
}

console.log(factr(5))

// error handling in js
// try , cacha,finally

// syn tex
try {
    // ya code reski hai
} catch (err) {
    // ya block error handel karta hai
} finally {
    // ye hamesha chalga
}


try {
    let result = 10 / 0;
    console.log(result)
    throw new Error("coustam Error?")
     
} catch (error) {
    console.log("Error pakda agy?",error.message)
} finally{
    console.log("ye block hamsa chalta hai?")
 }


const parsing = ["asif", "bajid", "arish", "asik"];

try {
    const user = JSON.parse(parsing);
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Parsing attempted");
}




// Higher-Order-Function (HOF)
// Function ko argument me leta hai ya function return karta hai.

// Callback Function
// Dusre function ko argument ke roop me pass kiya jata hai aur baad me call hota hai.

// Pure Function
// Same input => Same output
// External data ko touch nahi karta (No Side Effects).

// Immutability
// Data ko direct change nahi karta.
// Copy bana kar change karta hai.
// Original data same rehta hai.

// Recursion Function
// Jab koi function khud ko call kare.

// Error Handling
// try => Risky code
// catch => Error handle karta hai
// finally => Hamesha chalta hai

// JSON.parse()
// JSON string ko JavaScript object/array me convert karta hai.