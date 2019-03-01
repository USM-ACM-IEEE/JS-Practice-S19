/*
Problem 2:
Declare an empty array. Using your code from problem one, populate that array with 100 random numbers.
Output your array in JSON using JSON.stringify(your_array_here) and console.log()
*/

let arr = new Array(100);

for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 1000 + 1);
    console.log(arr[i]);
}

let myarr = JSON.stringify(arr.join(" "));


for (let i = 0; i < myarr.length; i++) {
    console.log(myarr[i]);
}