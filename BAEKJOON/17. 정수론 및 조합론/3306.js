const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const getGcd = (target, value) => {
  while (value > 0) {
    const tmp = target;
    target = value;
    value = tmp % value;
  }
  return target;
};

const ringNum = +input.shift();
const rings = input[0].split(" ").map((n) => +n);

const standardRing = rings[0];
let answer = "";
for (let i = 1; i < ringNum; i++) {
  const gcd = getGcd(standardRing, rings[i]);
  answer += `${standardRing / gcd}/${rings[i] / gcd}\n`;
}
console.log(answer);
