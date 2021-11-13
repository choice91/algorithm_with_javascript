const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const answer = [];

for (let i = 0; i < T; i++) {
  const ps = input[i].trim().split("");
  const psList = [];
  let check = true;
  for (let j = 0; j < ps.length; j++) {
    if (ps[j] === "(") {
      psList.push(ps[j]);
    } else if (ps[j] === ")") {
      if (psList.length <= 0) {
        answer.push("NO");
        check = false;
        break;
      } else {
        psList.pop();
      }
    }
  }
  if (psList.length <= 0 && check) {
    answer.push("YES");
  } else if (psList.length > 0 && check) {
    answer.push("NO");
  }
}
console.log(answer.join("\n"));
