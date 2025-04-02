class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    if (!value) return false;

    const nn = new Node(value);

    if (!this.top || this.length === 0) {
      this.top = nn;
      this.bottom = nn;
    } else {
      const holdingPointer = this.top;
      this.top = nn;
      this.top.next = holdingPointer;
    }

    this.length++;

    return value;
  }

  pop() {
    if (!this.top) return null;

    if (this.top === this.bottom || this.length === 0) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.push('Google'));
console.log(stack.push('Udemy'));
console.log(stack.push('Discord'));
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

// console.log(stack);
