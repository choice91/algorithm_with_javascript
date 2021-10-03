const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const info = input.map((el) => {
  return { age: Number(el.split(" ")[0]), name: el.split(" ")[1] };
});
info.sort((a, b) => a.age - b.age);
const answer = info.map((el) => `${el.age} ${el.name}`);
console.log(answer.join("\n"));
