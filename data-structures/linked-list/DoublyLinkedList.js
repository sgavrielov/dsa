class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // Check if the value is exists if not return false
    if (!value) return false;

    // Create new node
    const nn = new Node(value);

    nn.prev = this.tail;

    // appending the value
    // the new node now pointing to the tail
    this.tail.next = nn;
    this.tail = nn;

    // Increment the length of the singly linked list
    this.length++;

    return value;
  }

  prepend(value) {
    // Check if the value is exists if not return false
    if (!value) return false;

    // Create new node
    const nn = new Node(value);

    // prepending the value
    // the new node now become the head of the list
    nn.next = this.head;
    this.head.prev = nn;
    this.head = nn;

    // Increment the length of the singly linked list
    this.length++;

    return value;
  }

  insert(index, value) {
    if (typeof index !== 'number') return false;
    if (index === 0) {
      this.prepend(value);
      return this.data();
    }

    // if the index is greater than the length return false
    if (index > this.length) return false;

    // Create new node
    const nn = new Node(value);

    const leader = this._traverse(index - 1);
    const follower = leader.next;

    leader.next = nn;
    nn.prev = leader;
    follower.prev = nn;
    nn.next = follower;

    this.length++;

    return true;
  }

  remove(index) {
    if (typeof index !== 'number' || index > this.length) return false;

    const leader = this._traverse(index - 1);
    const unwanted = leader.next;

    leader.next = unwanted.next;

    this.length--;

    return true;
  }

  _traverse(index) {
    if (typeof index !== 'number') return false;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  data() {
    const data = [];
    let current = this.head;

    while (current !== null) {
      data.push(current.value);
      current = current.next;
    }

    return data;
  }
}

const dll = new DoublyLinkedList(10);

dll.append(5);
dll.append(16);
dll.prepend(1);
dll.insert(1, 99);
// dll.remove(1);
console.log(dll);
console.log(dll.data());
