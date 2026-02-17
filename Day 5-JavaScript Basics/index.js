//JavaScript variables

var fullname = 'Suchana Gurung';
let address = 'Kathmandu, Nepal';
const bloodGroup = 'O+';

console.log('Full Name: ', fullname);
console.log('Address: ', address);
console.log('Blood Group: ', bloodGroup);

//Data types

let name = 'Suchana';  //String
let age = 22;   //Number
let isStudent = true;   //Boolean
let hobbies = ['Coding', 'Traveling', 'Cooking'];  //Array

console.log(hobbies[0]);

let user = {
    name : 'Suchana',  //String
    age : 22,   //Number
    isStudent : true,   //Boolean
    hobbies : ['Coding', 'Traveling', 'Cooking'],  //Array
};  //object


console.log(user['name']);
console.log(user.name);

//Functions
function greet(name){
    console.log('Welcome', name);
}
greet('Suchana');

//DOM Manipulation

const headingElementById = document.getElementById('heading-2');
console.log('heading element by id',headingElementById);

const headingElementByQuery = document.querySelector('#heading-2');
console.log('heading element by query selector',headingElementByQuery);

headingElementByQuery.textContent = 'Get element by query selector';
headingElementByQuery.style.color = 'blue';
headingElementByQuery.style.fontSize = '24px';


const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert('Button clicked!');
    console.log('Button clicked');
});