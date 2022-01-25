class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // This is the hash function that a key & hashed it
  // This function is private
  // Do not call this function outside of this class
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    // If no key or no value return false
    // and do not set anything
    if (!key || !value) return false;

    // Create a new adress by hashing the key
    // that we can store our data in the array
    // based at the address we get from our hash function
    // ex. we got 15 store the key and value at 15 index of the array
    const address = this._hash(key);

    // If this addess is not empty
    // create new array in this address that
    // if we got a collision we store our data
    if (!this.data[address]) {
      this.data[address] = [];
    }

    // If we have some data in this address
    // we just going to push our new data to this address
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    // If no key return false
    if (!key) return false;

    // we hash our key to get the address
    const address = this._hash(key);

    // this variable hold all our data in the current address
    const currentBucket = this.data[address];

    // check if in the current bucket we have data
    if (currentBucket) {
      // if the length greater than one meaning we got a buket with a collision
      // and we going to loop over our current bucket
      // and compering our key with each value in the current bucket
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return false;
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        valuesArray.push(this.data[i][0][1]);
      }
    }

    return valuesArray;
  }
}

const ht = new HashTable(50);

ht.set('grapes', 10000);
ht.set('apples', 54);
ht.set('oranges', 2);

console.log(ht.get('apples'));

console.log(ht.keys());
