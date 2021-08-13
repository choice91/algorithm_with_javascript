const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(x, y) {
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 0) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else if (x > 0 && y < 0) {
    console.log(4);
  }
}

let input = [];
let count = 0;

rl.on("line", (value) => {
  input.push(value);
  count += 1;
  if (count > 1) {
    rl.close();
  }
}).on("close", () => {
  input = input.map((item) => +item);

  solution(input[0], input[1]);

  process.exit();
});
