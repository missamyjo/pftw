const myArr = ['Revolution Road', 'Atonement', 'Melancholia', 'The Road', 'Cake'];
console.log(myArr);
const addMovie = window.prompt('Most depressing movie?');
myArr.push(addMovie);
console.log('Most Depressing Movies list');
window.alert(myArr.join(', '));
console.log(myArr.toString());