const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];
const inputArr = input.split("");
let alpha = "";
let timeInitialValue = 3;
const alphaObject = {};

for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
  alpha += String.fromCharCode(i);

  if (alpha.length === 3 && !alpha.includes("P") && !alpha.includes("W")) {
    alphaObject[alpha] = timeInitialValue;
    timeInitialValue += 1;
    alpha = "";
  } else if (alpha.length === 4) {
    alphaObject[alpha] = timeInitialValue;
    timeInitialValue += 1;
    alpha = "";
  }
}

const answer = inputArr.reduce((acc, cur) => {
  for (let key in alphaObject) {
    if (key.includes(cur)) {
      acc += alphaObject[key];
    }
  }

  return acc;
}, 0);

console.log(answer);
