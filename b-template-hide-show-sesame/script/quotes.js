let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector('.person');

const quotes = [{
    quote: `"En dag som idag"`,
    person: `"Person Två"`
},
{
    quote: `"Dunderhonung är gott"`,
    person: `"Person Tre"`
},
{
    quote: `"En sista meningsfull tex"`,
    person: `"Person Fyra"`
},];

btn.addEventListener('mouseover', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});