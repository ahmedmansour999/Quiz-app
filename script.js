const QuizData = [
    {
        question: 'Jacks parents and so I am sure they would love to go to the exhibition ?',
        a: " like Picasso's paintings very much",
        b: "  like very much Picasso's paintings ",
        c: "  much Picasso's paintings like   ",
        d: "  much Picasso's paintings like   ",
        correct: 'd'
    },
    {
        question: 'How many months in the year?',
        a: "20",
        b: "30",
        c: "18",
        d: "none of these",
        correct: 'd'
    },
    {
        question: 'How many min in the year?',
        a: "20",
        b: "30",
        c: "18",
        d: "none of these",
        correct: 'd'
    },
    {
        question: 'How many hour in the year?',
        a: "20",
        b: "30",
        c: "18",
        d: "none of these",
        correct: 'd'
    },
    {
        question: 'How many days in the year?',
        a: "20",
        b: "30",
        c: "18",
        d: "none of these",
        correct: 'd'
    },
    {
        question: 'How many days in the year?',
        a: "20",
        b: "30",
        c: "18",
        d: "none of these",
        correct: 'd'
    }
];


const quetionElement = document.getElementById("quetion")
const a_text = document.getElementById("a_text") ;
const b_text = document.getElementById("b_text") ;
const c_text = document.getElementById("c_text") ;
const d_text = document.getElementById("d_text") ;
const subBtn = document.getElementById("submit") ;
const options = document.querySelectorAll(".option") ;
const quiz = document.getElementById('quiz') ; 


let currentQuiz = 0  ;
let score = 0 ;
loadQuiz()
function loadQuiz() {
   const currentQuizData = QuizData[currentQuiz] ;
   quetionElement.innerText = currentQuizData.question ;
   a_text.innerText=currentQuizData.a ;
   b_text.innerText=currentQuizData.b ;
   c_text.innerText=currentQuizData.c ;
   d_text.innerText=currentQuizData.d ;
}

let selectedOption = undefined ; 

function getSelectOption() {
    options.forEach((option)=>{
        if (option.checked){
            selectedOption=option.id
        }
    }) ;
    return selectedOption ;
}
function deselectOption() {
    options.forEach((option)=>{
        option.checked = false
    })
}


    subBtn.addEventListener("click", () => {
    const selectedOption = getSelectOption();
    

    if (selectedOption === QuizData[currentQuiz].correct) {
        score++;
    }

    deselectOption();

    currentQuiz++;

    if (currentQuiz < QuizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = `<p> Your Degree in Exam = ${score} / ${QuizData.length} </p>`
        quiz.style.textAlign = "center"
        subBtn.style.display = "none"
    }
    
});




