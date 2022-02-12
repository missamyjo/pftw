// select empty div and assign to a variable
constmyEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
// create a new element
const heading = document.createElement('h1');
heading.innerHTML = 'Llamas are the camel\'s hippie cousins.';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
    document.body.style.backgroundColor = 'tan';
}