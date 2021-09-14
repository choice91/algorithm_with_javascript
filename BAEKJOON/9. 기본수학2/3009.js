const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((value) => value.split(' ').map((n) => +n));

const coordinateX = [];
const coordinateY = [];
let x;
let y;

for (let i = 0; i < 3; i++) {
  coordinateX.push(input[i][0]);
  coordinateY.push(input[i][1]);
}

const xCount = coordinateX.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur] += 1;
  return acc;
}, {});

const yCount = coordinateY.reduce((acc, cur) => {
  if (!acc[cur]) {
    acc[cur] = 0;
  }
  acc[cur] += 1;
  return acc;
}, {});

for (let key in xCount) {
  if (xCount[key] === 1) {
    x = key;
  }
}

for (let key in yCount) {
  if (yCount[key] === 1) {
    y = key;
  }
}

console.log(`${x} ${y}`);
