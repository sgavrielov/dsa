class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  lookup(index) {
    // Check if the index is greater than the array length and checking the typeof index to make sure that is int
    // If the index is greater than the length return false
    // If the typeof index is not equal to int also return false
    if (index > this.length || typeof index !== 'int') return false;

    // returns the data that at the current index
    return this.data[index];
  }

  push(item) {
    // Check if the item is empty string and item not exits
    // If one of this cases true return false
    if (item === '' || !item) return false;

    // Add the item to the end of the array
    this.data[this.length] = item;

    // Increment the length of the array
    this.length++;

    // Return true because the item was pushed to the data array
    return true;
  }

  pop() {
    // If the data array is empty return false
    if (this.length === 0) return false;

    // save the last item of the data array in variable
    // that we can delete after we popped it out from the data array
    const lastItem = this.data[this.length - 1];

    // Delete the last item of the array
    delete this.data[this.length - 1];

    // Decrement the length because we delete one item from the array
    this.length--;

    // Returns the last item
    return lastItem;
  }

  delete(index) {
    // Check if the index is less than the length or equal to
    // If the index is greater than the length or index is not exists
    // return false
    if (index > this.length || !index) return false;

    // If the index is equal to the length
    // Call the pop method
    if (index === this.length) {
      return this.pop();
    }

    // Store the deleted item
    const deletedItem = this.data[index];

    // delete the item from the array
    delete this.data[index];

    // Call the _shiftItems function to rearrange the indexes of the array
    // This function is private
    // do not call this function outside of the class
    // This function automatically decrease the length of this array
    console.log(this._shiftItems(index));

    // Return the deleted item
    return deletedItem;
  }

  _shiftItems(index) {
    // Start shifting items from the current index up to the last item
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    // Delete the last item of the array
    // Because we shifted the items that started from the index
    delete this.data[this.length - 1];

    // Decrement the length of the array
    this.length--;

    return this.data[this.length - 1];
  }
}

const arr = new MyArray();

console.log(arr);
arr.push(1); // 0
arr.push(2); // 1
arr.push(3); // 2
arr.push(4); // 3
arr.push(5); // 4
arr.delete(3);
console.log(arr);
