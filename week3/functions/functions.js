//functions = execute actions at a given time 
//sometimes with different paramenters at a given time 
//example of a function receiving a paramater -
//greeting is paramater salutations is the argument
//why would we use a function? 
//so we can isolate bits of code that are connected or related or need to occur in a specific sequence
function logOutGreeting(greeting) {
    console.log(greeting);
}
logOutGreeting('Salutations');
//function to get stuff
function getStuff(ingredient) {
    console.log('get' + ingredient);
}
getStuff('get bread');
getStuff('get peanut butter');
getStuff('get honey');

let makeSandwich = (ingredientArray) => {
    for (let i = 0; i < ingredientArray.length; i++) {
        console.log('get ', ingredientArray[i]);
    }
};
makeSandwich = (ingredientArray) => {
    console.log(ingredientArray.toString(', '));
}
};
makeSandwich(['bread', 'mayo', 'tunafish']);
makeSandwich(['this', 'that', 'thing']);
function makeRand(maxNumber) {
    const output = Math.ceil(Math.random() * maxNumber);
    return output;
}
console.log(makeRand(100));

function checkLegality(age) {
    return age >= 21;
}
//console.log(checkLegality(18));
// const randomOutput = makeRand(100);
//console.log(makeRand(100));
const KensAge = 49;
if (checkLegality(KensAge)) {
    console.log('He is legal');
}
const myObject = {
    x: 200,
    y: 400,
    getPostion: () => {
        this.x = 35;
        this.y = 45;
        console.log('we are ' + this.x + 'from the left' + this.y + ' from the top');
    }
}
myObject.getPostion();
console.log(myObject.x, myObject.y);