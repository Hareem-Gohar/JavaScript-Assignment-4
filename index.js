//......Square of a number.............
let nSqr = 4;
console.log(`Square of ${nSqr} is ${nSqr * nSqr}.`)

// Square Root of a number.....
let sR = 40;
sR = Math.sqrt(sR);
console.log(sR);

// Copy from one array to another

let myArr = [1, 2, 3, 4, 5, 6];
let myArr2 = myArr;
console.log(myArr2);

// Maxi n Min 

let min = Math.min(10, 78, 54, 7);
let max = Math.max(10, 78, 54, 7);
console.log(`Maximum Value is ${max} and Minimum value is ${min}`);

//Total Number of -ve Element in arrays
let negativeArr = [1, 5, -9, 8, -2]
let count = 0;
for (let i = 0; i <= negativeArr.length; i++) {
    if (negativeArr[i] < 0) {
        count++
    }
}
console.log(`Total negative number in array is: ${count}`);

// sum of all even numbers between 1 to n
let n = prompt("Enter the number you want sum");
let sum = 0;
function sumof() {
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0) {
            sum = sum += i;

        }
    }
        console.log(`The Sum of even numbers till ${n} is : ${sum}`);
}
console.log(sumof());

// count total number of duplicate elements in an array.
let dupArr = [1, 1, 8, 9, 6, 8, 7, 9];
let check = 0;

for (let i = 0; i < dupArr.length - 1; i++) {
    for (let j = i + 1; j < dupArr.length; j++) {
        if (dupArr[i] === dupArr[j]) {
            check++;
        }
    }
}

console.log("Total number of duplicate elements: " + check);


console.log(check);
// let arrDup = [2, 3, 5, 7, 4, 8, 5, 3, 2, 5];
// let check = 0;

// for (let i = 0; i < arrDup.length; i++) {
//   for (let j = i + 1; j < arrDup.length; j++) {
//     if (arrDup[i] === arrDup[j]) {
//       check++;
//     }
//   }
// }

// console.log("Total number of duplicate elements: " + count);


