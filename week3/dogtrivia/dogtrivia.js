let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let numRight = 0;
let numWrong = 0;
let statements = [
    { question: 'What is the name of the Simpson\'s dog?', answer: 'Santa\'s Little Helper' },
    { question: 'Who is the most famous pug?', answer: 'Doug the Pug' },
    { question: 'Who is the dog from Peanuts?', answer: 'Snoopy' },
    { question: 'What is the name of the dog on Adventure Time?', answer: 'Jake' },
    { question: 'What dog solves mysteries with his gang?', answer: 'Scooby Doo' },
    { question: 'What is that name of the Jetson\'s dog?', answer: 'Astro' },

];
function next() {
    if (statements.length < 1) {
        alert('Congratulations! You know your dogs!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementObj => {
            return currentQuestion.answer != statementObj.answer;
        });
        // this is the correct condition
        response = 'That is correct! Try the next question.';
        responseColor = 'green';
        numRight++;
    } else {
        // this is the wrong answer condition
        response = 'Sorry, wrong answer. Try again.';
        responseColor = 'darkred';
        numWrong++;
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion) {
        message = currentQuestion.question;
    }
    preload();
    endQuiz();
}

currentQuestion = next();
let message = currentQuestion.question;
function endQuiz() {
    if (numRight === 5) {
        alert('Congratulations! You know your dogs!');
        numRight = 0;
        numWrong = 0;
        response = '';
    } else if (numWrong === 5) {
        alert('Better luck next time.');
        numRight = 0;
        numWrong = 0;
        response = '';
    }
}
function preload() {
}
function setup() {
    createCanvas(800, 600);
    heading = createElement('h1', ['Famous Dog Trivia']);
    heading.position(450, 100);
    subHeading = createElement('h2', ['*hint: Capitalize names. ex: Lassie Come Home']);
    subHeading.position(450, 400);
    questionInput = createInput('');
    questionInput.size(245, 24);
    questionInput.position(450, 260);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(110, 24);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(450, 300);
}
function draw() {
    background('lightgrey');
    fill('black');
    textSize(24);
    text(message, 200, 180);
    fill(responseColor);
    text(response, 200, 300);
    fill('black');
    textSize(16);
    text('Right: ' + numRight + '     Wrong: ' + numWrong, 205, 335);
}
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var threeMinutes = 60 * 3,
        display = document.querySelector('#time');
    startTimer(threeMinutes, display);
    startTimer.position(100, 300);
};
