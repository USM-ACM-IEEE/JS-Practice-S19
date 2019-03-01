
function generateRandom(max) {
    
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(generateRandom(1000));


let arr = [];

for (let i = 0; i < 100; i++) {
    
    arr[i] = generateRandom(1000);
}

console.log(arr);

console.log(JSON.stringify(arr));
