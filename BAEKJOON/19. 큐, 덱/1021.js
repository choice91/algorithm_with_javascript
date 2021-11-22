const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  _push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  _pop() {
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = this.head.next;
      newHead.prev = this.tail;
      this.tail.next = newHead;
      this.head = newHead;
      this.size--;
    }
  }
  rotateToLeft(n = 1) {
    while (n > 0) {
      if (this.size > 1) {
        let newTailPrev = this.tail;
        newTailPrev.next = this.head;
        const newHeadNext = this.head.next;
        this.tail = this.head;
        this.tail.prev = newTailPrev;
        this.tail.next = newHeadNext;
        this.head = newHeadNext;
        this.head.prev = this.tail;
      }
      n--;
    }
  }
  rotateToRight(n = 1) {
    while (n > 0) {
      if (this.size > 1) {
        const newTail = this.tail.prev;
        const headNext = this.head;
        const newHead = this.tail;
        newHead.next = headNext;
        this.head = newHead;
        this.tail = newTail;
        this.head.prev = this.tail;
        this.tail.next = this.head;
      }
      n--;
    }
  }
  rotate(value) {
    if (this.size <= 1) {
      return 0;
    }
    let curNode = this.head;
    let leftRotateCount = 0;
    let rightRotateCount = 0;
    while (curNode.value !== value) {
      curNode = curNode.next;
      leftRotateCount++;
    }
    curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.prev;
      rightRotateCount++;
    }
    if (leftRotateCount < rightRotateCount) {
      this.rotateToLeft(leftRotateCount);
      this._pop();
      return leftRotateCount;
    } else {
      this.rotateToRight(rightRotateCount);
      this._pop();
      return rightRotateCount;
    }
  }
  print() {
    let curNode = this.head;
    const nodes = [curNode.value];
    while (curNode.next !== this.head) {
      curNode = curNode.next;
      nodes.push(curNode.value);
    }
    console.log(nodes.join(" -> "));
  }
}

const [N, M] = input[0].trim().split(" ");
const nums = input[1].split(" ");
const deque = new Deque();

for (let i = 1; i <= +N; i++) {
  deque._push(i);
}

// deque.print();
// deque.rotateToRight(4);
// deque.print();
// deque.rotateToLeft(8);
// deque.print();
// deque._pop();
// deque.print();

console.log(
  nums.reduce((acc, cur) => {
    return acc + deque.rotate(+cur);
  }, 0)
);
