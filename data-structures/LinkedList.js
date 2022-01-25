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

  remove(index) {
    // TODO: check params

    const leader = this.traverseToIndex(index - 1);
    const unwanted = leader.next;

    leader.next = unwanted.next;
    this.length--;
    return true;
  }

  // Exercise
  reverse() {
    if (!this.head.next || this.length === 1) return this.head;

    let firstItem = this.head;
    this.tail = this.head;
    let secondItem = firstItem.next;

    while (secondItem) {
      let temp = secondItem.next;

      secondItem.next = firstItem;
      firstItem = secondItem;
      secondItem = temp;
    }

    this.head.next = null;
    this.head = firstItem;

    return true;
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

// [ 1, 10, 99, 16 ]
console.log(ll.data());

ll.reverse();

// [ 16, 99, 10, 1 ]
console.log(ll.data());
