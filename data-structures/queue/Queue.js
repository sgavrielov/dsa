class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    if (this.length === 0 || !this.first) return null;

    return this.first.value;
  }

  enqueue(value) {
    if (!value) return null;

    const nn = new Node(value);

    if (this.length === 0 || !this.first) {
      this.first = nn;
      this.last = nn;
    } else {
      this.last.next = nn;
      this.last = nn;
    }

    this.length++;

    return value;
  }

  dequeue() {
    if (this.length === 0 || !this.first) return null;
    if (this.first === this.last || this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this.first.value;
  }
}

const queue = new Queue();

queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
queue.enqueue('Saul');
console.log(queue.peek(''));
queue.dequeue();
console.log(queue.peek(''));
queue.dequeue();
queue.dequeue();
queue.dequeue();
// console.log(queue);
