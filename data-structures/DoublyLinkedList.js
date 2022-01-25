class DoublyLinkedList {
  constructor(value) {
    this.head = { value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value, next: null, prev: null };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = { value, next: null, prev: null };

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = { value, next: null, prev: null };

    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.next = follower;
    newNode.prev = leader;
    follower.prev = newNode;
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
}

const dll = new DoublyLinkedList(10);

// 10 <-> 5
dll.append(5);

// 10 <-> 5 <-> 16
dll.append(16);

// 3 <-> 10 <-> 5 <-> 16
dll.prepend(3);

// 3 <-> 10 <-> 99 <-> 5 <-> 16
dll.insert(2, 99);

console.log(dll.data());
