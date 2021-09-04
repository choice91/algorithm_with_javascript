const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => Number(n));
const T = input.shift();

for (let i = 0; i < T; i++) {
  const floor = input.shift();
  const roomNum = input.shift();
  const apt = [];

  for (let j = 0; j <= floor; j++) {
    apt.push([1]);

    for (let k = 1; k < roomNum; k++) {
      if (j === 0) {
        // 0층일때
        apt[j].push(k + 1);
      } else {
        // 1층 이상일때
        apt[j].push(apt[j][k - 1] + apt[j - 1][k]);
      }
    }
  }

  console.log(apt[floor][roomNum - 1]);
}
