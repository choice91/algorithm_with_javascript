const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2110_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ");
const nums = input.map((n) => +n).sort((a, b) => a - b);

function binarySearch(array, start, end) {
  let result = 0;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let current = array[0];
    let count = 1;
    for (let i = 1; i < array.length; i++) {
      if (array[i] >= current + mid) {
        count += 1;
        current = array[i];
      }
    }
    if (count >= +C) {
      start = mid + 1;
      result = mid;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

console.log(binarySearch(nums, 1, nums[nums.length - 1] - nums[0]));
