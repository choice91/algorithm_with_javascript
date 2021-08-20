const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const S = input[0].split("");
// let answer = [];

// for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
//   answer.push(S.indexOf(String.fromCharCode(i)));
// }

// console.log(answer.join(" "));

const S = input[0].split("");
const alphaArr = Array(26).fill(-1);
let answer = "";

for (let i = 0; i < S.length; i++) {
  let index = S[i].charCodeAt() - "a".charCodeAt();
  if (alphaArr[index] === -1) {
    alphaArr[index] = i;
  }
}

answer = alphaArr.join(" ");
console.log(answer);
