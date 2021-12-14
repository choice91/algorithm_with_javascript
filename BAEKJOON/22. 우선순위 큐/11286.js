const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./11286_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class AbsMinHeap {
  constructor() {
    this.heap = [];
  }
  isEmpty() {
    if (this.heap.length === 0) {
      return true;
    }
    return false;
  }
  // [절대값, 원본값]
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
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
  bubbleUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.heap[parentIndex][0] < this.heap[currentIndex][0] ||
        (this.heap[parentIndex][0] === this.heap[currentIndex][0] &&
          this.heap[parentIndex][1] < this.heap[currentIndex][1])
      ) {
        break;
      }
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }
  }
  bubbleDown(index) {
    const leftChildIndex = index * 2 + 1;
    const rightChildIndex = index * 2 + 2;
    const length = this.heap.length;
    let smallestIndex = index;
    if (
      leftChildIndex < length &&
      (this.heap[leftChildIndex][0] < this.heap[smallestIndex][0] ||
        (this.heap[leftChildIndex][0] === this.heap[smallestIndex][0] &&
          this.heap[leftChildIndex][1] < this.heap[smallestIndex][1]))
    ) {
      smallestIndex = leftChildIndex;
    }
    if (
      rightChildIndex < length &&
      (this.heap[rightChildIndex][0] < this.heap[smallestIndex][0] ||
        (this.heap[rightChildIndex][0] === this.heap[smallestIndex][0] &&
          this.heap[rightChildIndex][1] < this.heap[smallestIndex][1]))
    ) {
      smallestIndex = rightChildIndex;
    }
    if (smallestIndex !== index) {
      this.swap(index, smallestIndex);
      this.bubbleDown(smallestIndex);
    }
  }
}

const N = input.shift();
const nums = input.map((n) => +n);
const answer = [];
const absMinHeap = new AbsMinHeap();

nums.forEach((num) => {
  if (num === 0) {
    if (absMinHeap.isEmpty()) {
      answer.push(0);
    } else {
      answer.push(absMinHeap.getHead()[1]);
    }
  } else {
    absMinHeap.add([Math.abs(num), num]);
  }
});
console.log(answer.join("\n"));
