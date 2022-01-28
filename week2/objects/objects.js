const amyjosCar = {
    color: 'black',
    pistons: 4
};
// color is the key, black is the the value 
// use commas between values
console.log(amyjosCar);

// mutate: add data (properties)
// use camel case - capitalization on second word 
amyjosCar.fuelInjection = true;
console.log(amyjosCar);
amyjosCar['4-wheel-drive'] = true;

// display single item with dot
// add a string with a comma to dispaly both at same time 
console.log('kens car is', amyjosCar.color);

//display single item with array notation
console.log('is it 4 wheel dig?', amyjosCar['4-wheel-drive']);

//use toString 
console.log(amyjosCar.toString());
// (works with arrays too)
const myCars = ['rav', 'pilot', 'juke'];
console.log(myCars.toString());

//mutate: remove property
delete amyjosCar.pistons;
console.log('amyjos car without pistons', amyjosCar);

//merge two objects

//objects in array

