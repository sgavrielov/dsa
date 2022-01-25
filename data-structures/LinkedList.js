/*
10 -> 5 -> 16
const myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

*/

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value,
      next: null,
    };

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  data() {
    const output = [];
    let current = this.head;

    while (current !== null) {
      output.push(current.value);
      current = current.next;
    }

    return output;
  }

  remove(index) {
    // TODO: check params

    const leader = this.traverseToIndex(index - 1);
    const unwanted = leader.next;

    leader.next = unwanted.next;
    this.length--;
    return true;
  }
}

// 10
const ll = new LinkedList(10);

// 10 -> 5
ll.append(5);

// 10 -> 5 -> 16
ll.append(16);

// 1 -> 10 -> 5 -> 16
ll.prepend(1);

// 1 -> 10 -> 99 -> 5 -> 16
ll.insert(2, 99);

// 1 -> 10 -> 99 -> 16
ll.remove(3);

console.log(ll.data());
