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
const basicJuke = {
    wheels: 4,
    color: 'red',
    doors: 4,
    make: 'Volks'
};
const newJuke = Object.assign({}, basicJuke, amyjosCar);
// empty object {}, amyjoscar will overwrite basicJuke - last thing always overrides previous
console.log('new juke', newJuke);

//objects in array
const cars = [
    { make: 'Volks', model: 'Jetta', color: 'blue' },
    { make: 'Volks', model: 'Cabrio', color: 'green' },
    { make: 'Dodge', model: 'Viper', color: 'blue' }
    { make: 'Dodge', model: 'Mustang', color: 'pink' }
    { make: 'Chevy', model: 'Blazer', color: 'black' }
    { make: 'Dodge', model: 'Charger', color: 'red' }

];
console.log('index 1 of cars color', cars[1].color);
///or
console.log('make is', cars[0].make);
const randomIdx = Math.round(math.random() * cars.length - 1);
// math.random value betwen 0 and 1
// cars.length gives us total number of cars (that random number times five)
console.log('My car is a ' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);

