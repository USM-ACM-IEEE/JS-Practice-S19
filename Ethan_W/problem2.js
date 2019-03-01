/*
Problem 2:
Declare an empty array. Using your code from problem one, populate that array with 100 random numbers.
Output your array in JSON using JSON.stringify(your_array_here) and console.log()
*/

//	Function Declaration/Definitions

function RandomNumber() {
	return Math.floor(Math.random() * 1000);
}

function AssignArray(array, num) {
	array[num] = RandomNumber();
}

function OutputArray(array, num) {
	console.log(JSON.stringify(array[num],));
}

//	Main Code

let arr = [];

for (i = 0; i < 100; i++) {
	AssignArray(arr, i);
	OutputArray(arr, i);
}