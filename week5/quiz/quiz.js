const dogNames = ['Lucky', 'Lucy', 'Limda', 'Lacey', 'Carl'];
for (let j = 0; j < dogNames.length; j++) {
    console.log('My dog', dogNames[j], 'is a really good puppy.');
}

const greekMythicalCharacters = ["Athena", "Zeus", "Hermes", "Hercules", "Hera", "that one guy"];
for (let index = 0; index < greekMythicalCharacters.length; index++) {
    if (greekMythicalCharacters[index] === 'that one guy') {
        greekMythicalCharacters[index] = 'Hades';
        break;
    }
}
console.log(greekMythicalCharacters);