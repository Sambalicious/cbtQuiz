

const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');




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
        correctAnswer:'d'
    }
]

function buildQuiz(){
    //storing the html output

    const output = [];

    //loop through the question
    myQuestions.forEach(
        (currentQuestion, questionNumber) =>{
            //store list of answers by candidate
        const answers = [];
        
        // available answers
        for (letter in currentQuestion.answers){
            ///add the radio 
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        // add the question and its answer to output
        output.push(
            `<div class="question"> ${currentQuestion.question}</div>
            <div class='answers'> ${answers.join(' ')}</div>`
        )

        }
    );

    //combine the output into one string

    quizContainer.innerHTML = output.join(' ');

}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');

    //monitor users answers
    let numCorrect = 0;

    //for each question
    myQuestions.forEach((currentQuestion, questionNumber) => {

        //find selected answers

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = ( answerContainer.querySelector(selector) || {}).value;


    ///conditional statements to check the validity of the questions
    if (userAnswer === currentQuestion.correctAnswer){
        /// add +1 to  the scores
        numCorrect++;


         //add styles to correct answers
         answerContainers[questionNumber].style.color="lightgreen";
    }
    else{
       
        //add styles to the wrong answers
        answerContainers[questionNumber].style.color="red";
    }

    });

    //show number of correct answers out of total
    resultsContainer.innerHTML = `You  got ${numCorrect} out of ${myQuestions.length} Questions`;
}

//display quiz
buildQuiz();

//show result on submit

submitBtn.addEventListener('click', showResults);


