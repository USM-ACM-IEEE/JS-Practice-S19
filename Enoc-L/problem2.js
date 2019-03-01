/*
Problem 2:
Declare an empty array. Using your code from problem one, populate that array with 100 random numbers.
Output your array in JSON using JSON.stringify(your_array_here) and console.log()
*/

let x = Math.floor(Math.random() * 101);
let arr = [x];

for(i=0; i < 101; i++){
  x = Math.floor(Math.random() * 101);
  arr.push(x);
}

let theJSON = JSON.stringify(arr);


console.log(theJSON);
