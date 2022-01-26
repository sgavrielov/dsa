class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    const holdingPointer = leader.next;

    leader.next = nn;
    nn.next = holdingPointer;

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

const sll = new SinglyLinkedList(10);

sll.append(5);
sll.append(16);
sll.prepend(1);
sll.insert(2, 99);
sll.remove(1);

console.log(sll.data());
