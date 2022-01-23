function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log('boo!');
  }
}

boo([1, 2, 3, 4, 5]); // O(1)
