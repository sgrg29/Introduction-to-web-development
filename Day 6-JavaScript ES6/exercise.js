//* JavaScript ES6 Exercise

// ============================================
//* EXERCISE 1: Array Methods (push, pop, slice, splice)
// ============================================

// 1.1 Push and Pop
const fruits = ['apple', 'banana'];
// TODO: Add 'orange' to the end using push()
fruits.push('orange');
console.log(fruits);
// TODO: Remove the last fruit using pop() and store it in a variable called removedFruit
const removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);


// 1.2 Slice vs Splice
const numbers = [1, 2, 3, 4, 5];
// TODO: Use slice() to get [2, 3, 4]
const sliced = numbers.slice(1, 4);
console.log(sliced);
// TODO: Use splice() to remove 2 and 3, and insert 'two' and 'three' in their place
numbers.splice(1, 2, 'two', 'three');
console.log(numbers);
// ============================================
//* EXERCISE 2: Arrow Functions
// ============================================

// 2.1 Convert to arrow function and console.log using template literals
/*function greet(name) {
  console.log('hello ' + name);
}*/
// TODO: Rewrite greet as an arrow function and use template literals to log the greeting message
const greet = (name) => {
  console.log(`hello ${name}`);
};
greet('Suzim');

// 2.2 Arrow function with multiple parameters
// TODO: Create an arrow function that adds two numbers
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));
// ============================================
//* EXERCISE 3: Map
// ============================================

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 78 },
];

// TODO: Use map() to extract only the names
const names = students.map((student) => {
  return student.name;
});

console.log(names);
// ============================================
//* EXERCISE 4: Filter
// ============================================

const products = [
  { name: 'Laptop', price: 1200 },
  { name: 'Mouse', price: 25 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 80 },
];

// TODO: Filter products that cost less than $100
const affordableProducts = products.filter((product) =>{
  return product.price < 100;
});
console.log(affordableProducts);

// ============================================
//* EXERCISE 5: Reduce
// ============================================

const prices = [10, 20, 30, 40];

// TODO: Use reduce() to find largest price
const largestPrice = prices.reduce((max, current) =>
  current > max ? current : max
);

console.log(largestPrice);
// ============================================
//* EXERCISE 6: Array Destructuring
// ============================================

const colors = ['red', 'green', 'blue'];
// TODO: Destructure to get first and second colors
const [firstColor, secondColor] = colors;
console.log(firstColor);
console.log(secondColor);
// ============================================
//* EXERCISE 7: Object Destructuring
// ============================================

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
};

// TODO: Destructure to get firstName and age
const { firstName, age } = person;
console.log(firstName);
console.log(age);
// TODO: Destructure with renaming: firstName as 'first'
const { firstName: first, lastName: last } = person;
console.log(first);
console.log(last);
// TODO: Destructure with default values
const { country = 'USA', city = 'New York' } = person;
console.log(country);
console.log(city);
// ============================================
//* CHALLENGE: Combine Everything
// ============================================

const employees = [
  { id: 1, name: 'Alice', department: 'IT', salary: 75000 },
  { id: 2, name: 'Bob', department: 'HR', salary: 65000 },
  { id: 3, name: 'Charlie', department: 'IT', salary: 80000 },
  { id: 4, name: 'Diana', department: 'Finance', salary: 70000 },
];

// TODO: Filter IT department employees
const itEmployees = employees.filter((emp) =>{ 
  return emp.department === 'IT';
});
console.log(itEmployees);
// TODO: Map to get only name and salary
const itNamesAndSalaries = itEmployees.map((emp) =>{ 
  return ({ name: emp.name, salary: emp.salary })
});
console.log(itNamesAndSalaries);
// TODO: Use reduce to calculate average IT salary
const totalSalary = itEmployees.reduce((sum, emp) => {
  return sum + emp.salary;
}, 0);
const avgSalary = totalSalary / itEmployees.length;
console.log(avgSalary);
// TODO: Destructure the first employee's name and salary
const { name: firstname, salary: firstSalary } = itEmployees[0];
console.log(firstname);
console.log(firstSalary);