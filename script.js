const quizData = [
    {
        question: "While Apple was formed in California, in which western state was Microsoft founded?",
        a: "Washington",
        b: "Colorado",
        c: "New Mexico",
        d: "New York",
        correct: "c"
    },
    {
        question: 'Generally, which component of a computer draws the most power?',
        a: 'Video Card',
        b: 'Hard Drive',
        c: 'Processor',
        d: 'Power Supply',
        correct: 'a'
    },
    {
        question: 'How many cores does the Intel i7-6950X have?',
        a: '20',
        b: '10',
        c: '30',
        d: '40',
        correct: 'b'
    },
    {
        question: 'In the server hosting industry IaaS stands for...',
        a: 'Internet as a Service',
        b: 'Internet and a Server',
        c: 'Infrastructure as a Service',
        d: 'Infrastructure as a Server',
        correct: 'c'
    },
    {
        question: 'In programming, the ternary operator is mostly defined with what symbol(s)?',
        a: '?/',
        b: '??',
        c: 'if else',
        d: '?:',
        correct: 'd'
    },
    {
        question: 'What is the main CPU is the Sega Mega Drive / Sega Genesis?',
        a: 'Motorola 68000',
        b: 'Zilog Z80',
        c: 'Yamaha YM2612',
        d: 'Intel 8088',
        correct: 'a'
    },
    {
        question: 'The name of technology company HP stands for what?',
        a: 'Hewlett-Parker',
        b: 'Hewlett-Packard',
        c: 'Haily-Pitterson',
        d: 'Hawa-Pak',
        correct: 'b'
    },
    {
        question: 'What does RAID stand for?',
        a: 'Redundant Array of Independent Disks',
        b: 'Rapid Access for Indexed Devices',
        c: 'Range of Applications with Identical Designs',
        d: 'Randomized Abstract Identification Description',
        correct: 'a'
    }
];


const quiz = document.getElementById('quiz');
const answerElemets = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let answer = undefined;
let currentQuiz = 0;
let score = 0;
loadQuiz();

// get questions from quizDAta 
function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

//check and get inputs id
function getSelected() {
    let answer = undefined;

    answerElemets.forEach((answerElemet) => {
       if(answerElemet.checked){
        answer = answerElemet.id
       }
    });

    return answer;
}

function deselectAnswer(){

    answerElemets.forEach((answerElemet) => {
       answerElemet.checked = false;
    });
}




// click submit button and move to next questions
submitBtn.addEventListener('click', () => {

     const answer = getSelected();
     console.log(answer);

     if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML = `<h2> You answered correctly ${score} out of ${quizData.length} questions.</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
     }
})