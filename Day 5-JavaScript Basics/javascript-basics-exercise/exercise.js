const counterTextElement = document.querySelector('.js-counter-text');
const incrementButtonElement = document.querySelector('.js-increment-btn');
const decrementButtonElement = document.querySelector('.js-decrement-btn');

let counter = 0;
incrementButtonElement.addEventListener('click', ()=>{
    counter++;
    counterTextElement.textContent = counter;
});
decrementButtonElement.addEventListener('click', () =>{
    if(counter>0){
    counter--;
    counterTextElement.textContent = counter;
    }
});

const ageInputElement = document.querySelector('.js-age-input');
const calculateButtonElement = document.querySelector('.js-calculate-btn');
const resultElement = document.querySelector('.js-result');


document.addEventListener('DOMContentLoaded', () => {
    calculateButtonElement.addEventListener('click', () =>{
        const age = ageInputElement.value;
        const dogAge = age * 7;
        resultElement.textContent = 'Your age in dog year is '+dogAge;
    });
});