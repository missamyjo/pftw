// variable but has multiple slots 
// var or let or const 
const myArr = ['bob', 'betty', 'sue'];
const myOtherArray = new Array();
//push is to add item to the end 
myOtherArray.push('star wars');
myOtherArray.push('raiders of the lost ark');

// myArr.pop(); //pop is to remove last item 
// myArr.shift(); //shift is to remove first item 

//unshift adds item to beginning
myArr.unshift('james');
// each slot has an index number 0, 1, 2... 1st item is 0, 2nd item is 1, etc.
console.log(myArr);
console.log(myOtherArray);
conslog.log(myOtherArray[0]); // read single item
console.log(myArr[1]);
console.log(myArr.indexOf('betty'));
const bettyIdx = myArr.indexOf('betty');
console.log(myArr[bettyIdx]); // if not found -1, if found real index number 
if (bettyIdx > -1) {
    console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, 'robert'); // these are all mutations - taken the array and changed it
console.log(myArr);
console.log(myArr.length); // outputs the number of slots in the array
//console is the object and log is the property
//myArr is the object and length is the property
//pop , shift, push, splice,  - methods that belongs to the array protoype object 
//array is an object 
// const randomNumber = Math.random() * (myArr.length - 1);
// creates a random number between 0 and 5
// Math.random() for random number between 0 and 1
// Math.round(n) round to nearest whole number 
// MyArr.length - 1 to get the last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);