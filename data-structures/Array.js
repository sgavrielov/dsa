// const strings = ['a', 'b', 'c', 'd'];

// // 4 * 4 = 16 bytes of storage

// // push
// strings.push('e'); // O(1)

// // pop
// strings.pop(); // O(1)
// strings.pop(); // O(1)

// // unshift
// strings.unshift('x'); // O(n)

// // splice
// strings.splice(2, 0, 'alien'); // O(n)

// console.log(strings);

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this._shiftItems(index);
    return item;
  }

  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      // [0, 2] -> [2]
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();

// console.log(myArray); // MyArray { length: 0, data: {} }
// console.log(myArray.get(0)); // undefined
// myArray.push('hi');
// console.log(myArray); // MyArray { length: 1, data: { '0': 'hi' } }
// myArray.push('you');
// console.log(myArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }
// myArray.push('i');
// console.log(myArray); // console.log(myArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }
// myArray.pop();
// console.log(myArray); // MyArray { length: 2, data: { '0': 'hi', '1': 'you' } }

myArray.push('hi');
myArray.push('you');
myArray.push('i');
myArray.delete(0);
myArray.push('are');
myArray.push('nice');
myArray.delete(1);
console.log(myArray);
