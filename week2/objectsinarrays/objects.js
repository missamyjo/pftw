const cardGames = [
    { title: 'Skip-Bo', numberCards: '144', age: '7', rating: '4.9', shortDescription: 'uses strategy to create stacks of sequentially numbered, ascending cards' },
    { title: 'Uno', numberCards: '108', age: '5', rating: '4.8', shortDescription: 'is a race to be the first player with no cards' },
    { title: 'Solitaire', numberCards: '52', age: '8', rating: '4.2', shortDescription: 'a one-player game of sorting cards' },
    { title: 'Taco Cat Goat Cheese Pizza', numberCards: '64', age: '8', rating: '4.9', shortDescription: 'a wild game of quick action' }
];
console.log(cardGames);
const pickGame = window.prompt("I play 4 card games with my daughter. Pick a number between 1 and 4 and I'll tell you about that game.");
window.alert('You selected ' + cardGames[pickGame - 1].title + ' which has ' + cardGames[pickGame - 1].numberCards + ' cards and is recommended for ages ' + cardGames[pickGame - 1].age + ' and up. The average rating is ' + cardGames[pickGame - 1].rating + ' out of 5 stars. ' + cardGames[pickGame - 1].title + ' ' + cardGames[pickGame - 1].shortDescription + '. '); 