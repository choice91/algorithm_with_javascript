const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = Number(input[0].split("").reverse().join(""));
let B = Number(input[1].split("").reverse().join(""));

let result = A > B ? A : B;
console.log(result);

// let A = input[0];
// let B = input[1];
// let newNum1 = "";
// let newNum2 = "";

// for (let i = A.length - 1; i >= 0; i--) {
//   newNum1 += A[i];
// }

// for (let i = B.length - 1; i >= 0; i--) {
//   newNum2 += B[i];
// }

// let result = Number(newNum1) > Number(newNum2) ? newNum1 : newNum2;
// console.log(result);
