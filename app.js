

const quizContainer = document.querySelector('#quiz');
const resultContainer = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');

function buildQuiz(){
    //storing the html output

    const output = [];

    //loop through the question
    myQuestions.forEach(
        (currentQuestion, questionNumber) =>{
            //store list of answers
        const answers = [];
        
        // available answers
        for (letter in currentQuestion.answers){
            ///add the radio button
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        // add the question and its answer to output
        output.push(
            `<div class="question> ${currentQuestion.question}</div>
            <div class='answers'> ${answers.join('')}</div>`
        )

        }
    );

    //combine the output into one string

    quizContainer.innerHTML = output.join('');

}

function showResult(){

}

//display quiz
buildQuiz();

//show result on submit

submitBtn.addEventListener('click', showResult);


//question bank


const myQuestions = [
    {
        question: 'Who invented Javascript?', 
        answers: {
            a: 'Douglas Crockford',
            b: 'Sheryl Sandberg',
            c: 'Bredan Eich',
            d: 'Samuel Ayegbusi'
        }, 
        correctAnswer: "c"
    },{
        question: "which one of these is a Javascript package manager",
        answers: {
            a: 'Node.js', 
            b: 'TypeScirpt',
            c: 'npm',
            d:'command line'
        },
        correctAnswer: 'c'
    },{
        question:"Which tool can you use to ensure code quality?",
        answers:{
            a: 'Angular',
            b: 'JQuery',
            c:'RequireJS',
            d:'ESLint'
        }, 
        correctAnswer:'D'
    }
]