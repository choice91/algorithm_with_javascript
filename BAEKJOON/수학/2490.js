/**
 * 백준 2490번: 윷놀이
 * 알고리즘 분류: 구현
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2490_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const nums = input.map((v) => v.split(" ").map((v) => +v));

nums.forEach((arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  switch (sum) {
    case 4: {
      console.log("E");
      break;
    }
    case 3: {
      console.log("A");
      break;
    }
    case 2: {
      console.log("B");
      break;
    }
    case 1: {
      console.log("C");
      break;
    }
    case 0: {
      console.log("D");
      break;
    }
  }
});
