/* 
Problem 1:
Using Math, generate a random number between 0/1 and 1000 and display a whole number in the console using console.log
*/

function RandomNumber() {
	return Math.floor(Math.random() /*<-- Generates a number between 1 and 0*/ * /*<-- ???*/ 1000);
}

console.log(RandomNumber());