const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./11279_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class MaxHeap {
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
      if (this.heap[parentIndex] >= this.heap[currentIndex]) {
        break;
      }
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }
  bubbleDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let largestIndex = index;
    if (this.heap[leftIndex] > this.heap[largestIndex]) {
      largestIndex = leftIndex;
    }
    if (this.heap[rightIndex] > this.heap[largestIndex]) {
      largestIndex = rightIndex;
    }
    if (largestIndex !== index) {
      this.swap(largestIndex, index);
      this.bubbleDown(largestIndex);
    }
  }
  isEmpty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }
  getHead() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return maxValue;
  }
}

const N = +input.shift();
const nums = input.map((n) => +n);
const answer = [];
const maxHeap = new MaxHeap();

for (let i = 0; i < N; i++) {
  if (nums[i] === 0) {
    if (maxHeap.isEmpty()) {
      answer.push(0);
    } else {
      answer.push(maxHeap.getHead());
    }
  } else {
    maxHeap.add(nums[i]);
  }
}
console.log(answer.join("\n"));
