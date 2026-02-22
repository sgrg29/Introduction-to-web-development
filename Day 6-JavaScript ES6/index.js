//Arrow function

const greet = (name) => {
    //console.log(`hello ${name}`);

};
greet('Suchana');

//Array methods
const numbers = [10, 20, 40, 60];

//Push and Pop
numbers.push(80);
numbers.push(100);
//console.log(numbers);

numbers.pop();
//console.log(numbers);

//Map, Filter and Reduce
const numberList = [10, 20, 35, 45, 50];
/*numberList.map((number) => {
    console.log(number);
});

*/
const doubleNumbers = numberList.map((number) => {
    return number * 2;
});
//console.log(doubleNumbers);

const evenNumberList = numberList.filter((number) => {
    return number % 2 === 0;
});

//console.log(evenNumberList);

const totalSum = numberList.reduce((accumulator, curentValue) => {
    //console.log(accumulator, curentValue);
    return accumulator + curentValue;
}, 0);
//console.log(totalSum);

//Slice and Splice

const fruits = ['apple', 'banana', 'orange', 'mango'];
/*const slicedFruits = fruits.slice(1);
console.log(slicedFruits);
*/
const splicedFruits = fruits.splice(1,2, 'grape', 'kiwi');
//console.log(splicedFruits);
//console.log(fruits);

//Spread operator
const names = ['Alice', 'Bob', 'Charlie'];
/*console.log(names);
console.log(...names);*/

const newNames = [...names, 'David', 'Eve'];
//console.log(newNames);

const user = {
    name :'Suchana',
    age : 22,
    address : 'Kathmandu, Nepal',
};

const updateUser = {
    ...user,
    isStudent : true,
};
//console.log(updateUser);



//Drustructing

const [firstName, secondName] = newNames;
// console.log(firstName);
// console.log(secondName);

const {name, address} = updateUser;
console.log(name, address);