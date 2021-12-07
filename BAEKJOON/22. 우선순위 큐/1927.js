const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1927_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[currentIndex]) {
        break;
      }
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let parentIndex = index;
    if (this.heap[leftIndex] < this.heap[parentIndex]) {
      parentIndex = leftIndex;
    }
    if (this.heap[rightIndex] < this.heap[parentIndex]) {
      parentIndex = rightIndex;
    }
    if (parentIndex !== index) {
      this.swap(parentIndex, index);
      this.bubbleDown(parentIndex);
    }
  }
  getHead() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return minValue;
  }
  isEmpty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }
}

const N = +input.shift();
const nums = input.map((n) => +n);
const minHeap = new MinHeap();
const answer = [];

nums.forEach((num) => {
  if (num === 0) {
    if (minHeap.isEmpty()) {
      answer.push(0);
    } else {
      answer.push(minHeap.getHead());
    }
  } else {
    minHeap.add(num);
  }
});

console.log(answer.join("\n"));
