const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const numbers = input.map((n) => +n);

function arithmeticMean(count, nums) {
  const result = nums.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  return Math.round(result / count);
}

function median(count, nums) {
  nums.sort((a, b) => a - b);
  const middleIdx = Math.floor(count / 2);
  return nums[middleIdx];
}

function mode(nums) {
  if (nums.length === 1) {
    return nums[0];
  } else {
    const numsCount = nums.reduce((acc, cur) => {
      if (!acc[cur]) {
        acc[cur] = 0;
      }
      acc[cur] += 1;
      return acc;
    }, {});
    let max = 0;
    const maxArr = [];
    for (let key in numsCount) {
      if (max < numsCount[key]) {
        max = numsCount[key];
      }
    }
    for (let key in numsCount) {
      if (numsCount[key] === max) {
        maxArr.push(+key);
      }
    }
    maxArr.sort((a, b) => a - b);
    if (maxArr.length === 1) {
      return maxArr[0];
    }
    return maxArr[1];
  }
}

function range(nums) {
  nums.sort((a, b) => a - b);
  return Math.abs(nums[nums.length - 1] - nums[0]);
}

console.log(arithmeticMean(N, numbers));
console.log(median(N, numbers));
console.log(mode(numbers));
console.log(range(numbers));
