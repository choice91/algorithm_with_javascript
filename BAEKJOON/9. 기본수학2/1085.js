const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

const x = +input[0];
const y = +input[1];
const w = +input[2];
const h = +input[3];

const minX = Math.min(x, w - x);
const minY = Math.min(y, h - y);

console.log(Math.min(minX, minY));
