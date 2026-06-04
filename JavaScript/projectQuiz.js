// Quiz ke sare questions ek array me store kiye gaye hain
const Questions = [
    {
        // Question text
        question: "what is 2 + 3",

        // Question ke options
        opction: ['A)5', 'B)23', 'C)6', 'D)4'],

        // Sahi answer
        answer: 'A'
    },
    {
        question: "what is 2 * 3",
        opction: ['A)5', 'B)23', 'C)6', 'D)4'],
        answer: 'C'
    },
    {
        question: "what is 5 - 8",
        opction: ['A)5', 'B)-3', 'C)6', 'D)4'],
        answer: 'B'
    },
    {
        question: "what is 2 + 2",
        opction: ['A)5', 'B)23', 'C)6', 'D)4'],
        answer: 'D'
    }
];

// User ka score store karne ke liye variable
let score = 0;

// Quiz start karne wala function
function startQuiz() {

    // Welcome message
    console.log("Welcome to Quiz Game");
    console.log("Answer each question by typing the correct option letter (A, B, C, D)");
    console.log("Good Luck\n");

    // Questions array ke har question par loop chalega
    Questions.forEach((q, index) => {

        // Question number aur question print hoga
        console.log(`Question ${index + 1}: ${q.question}`);

        // Sabhi options print honge
        q.opction.forEach(option => console.log(option));

        // User se answer lena
        // toUpperCase() answer ko capital letter me convert karta hai
        const userAnswer = prompt("Enter your Answer").toUpperCase();

        // User ke answer ko correct answer se compare karna
        if (userAnswer === q.answer) {

            // Agar answer sahi hai
            console.log("Correct\n");

            // Score me 1 add karo
            score++;

        } else {

            // Agar answer galat hai
            console.log("Wrong\n");
        }
    });

    // Quiz khatam hone ke baad final score print hoga
    console.log("Quiz Game Over");
    console.log("Your Score:", score);
}

// Quiz start karna
startQuiz();