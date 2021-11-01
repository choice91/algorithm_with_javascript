const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const nums = input.map((n) => +n);
nums.sort((a, b) => b - a);

const getGcd = (n1, n2) => {
  while (n2 > 0) {
    let tmp = n1;
    n1 = n2;
    n2 = tmp % n2;
  }
  return n1;
};

const getLcm = (n1, n2) => {
  const gcd = getGcd(n1, n2);
  const lcm = (n1 * n2) / gcd;
  return lcm;
};

console.log(getGcd(nums[0], nums[1]));
console.log(getLcm(nums[0], nums[1]));
