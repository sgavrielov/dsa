class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
  }

  push(value) {
    if (!value) return false;

    this.data.push(value);

    return value;
  }

  pop() {
    if (this.isEmpty()) return null;

    return this.data.pop();
  }

  isEmpty() {
    return this.data.length === 0 ? true : false;
  }
}

const stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');
// console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.data);
