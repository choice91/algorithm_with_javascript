const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ");
const trees = input[1].split(" ").map((n) => +n);

let minHeight = 0;
let maxHeight = 0;
trees.forEach((el) => {
  if (el > maxHeight) {
    maxHeight = el;
  }
});

while (minHeight <= maxHeight) {
  const mid = Math.floor((minHeight + maxHeight) / 2);
  let cutDownTreeLength = 0;
  for (let tree of trees) {
    if (tree > mid) {
      cutDownTreeLength += tree - mid;
    }
  }
  if (cutDownTreeLength < +M) {
    maxHeight = mid - 1;
  } else {
    minHeight = mid + 1;
  }
}
console.log(maxHeight);
