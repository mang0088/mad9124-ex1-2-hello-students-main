'use strict';

// 1. Read the JSON file into a variable called students
let students = require('./students.json');

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

students.forEach(function (obj) {
  console.log('Hello ' + obj.firstName + ' ' + obj.lastName);
});

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

let studUpdate = students.filter((elem) => {
  return elem.lastName.charAt(0) == 'D';
});

console.log(studUpdate.length);
