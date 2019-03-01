/*
Problem 2:
Declare an empty array. Using your code from problem one, populate that array with 100 random numbers.
Output your array in JSON using JSON.stringify(your_array_here) and console.log()
*/

var emptyArray = new Array(100);

for (var i = 0; i < 100; i++) {
   emptyArray[i] = Math.floor((Math.random() * 1000) + 1);
   console.log(JSON.stringify(emptyArray[i]));
};
