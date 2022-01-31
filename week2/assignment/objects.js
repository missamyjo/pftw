const myTrivia = [
    { question: 'What is the name of the Simpsons dog?', answer: 'Santas Little Helper' },
    { question: 'Who is the most famous pug', answer: 'Doug the Pug' },
    { question: 'Who is the dog from Peanuts?', answer: 'Snoopy' },
    { question: 'What is the name of the dog on Adventure Time?', answer: 'Jake' },
    { question: 'What dog solves mysteries with his gang?', answer: 'Scooby Doo' },
];
console.log(myTrivia);
const randomQuestion = Math.floor(Math.random() * myTrivia.length);
const answer = window.prompt(myTrivia[randomQuestion].question);
window.alert('You answered ' + answer + '. The correct answer is ' + myTrivia[randomQuestion].answer + '.');

